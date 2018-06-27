import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberOfColumns: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  numberOfRows: number[] = [1,2,3,4,5,6,7,8];
  boxBackground: any[][] = [[],[],[],[],[],[],[],[]];
  // Used for helping to mimic a drag event
  mousePressed: boolean = false;
  color: any = '';
  code: any = '';

  constructor(public dialog: MatDialog) {
    // Set all box colors to a light grey
    for(let i = 0; i<8; i++) {
      for(let j = 0; j<16; j++) {
        this.boxBackground[i][j]='241,241,241';
      }
    }
  }

  // Changes the background color of the clicked box with the currently selected color
  boxClicked(row, column) {
    let modifiedString = this.color.slice(5);
    modifiedString = modifiedString.split(",");
    this.boxBackground[row][column] = modifiedString[0] + ',' + modifiedString[1] + ',' + modifiedString[2];
  }

  // Mouse was pressed
  mouseClicked() {
    this.mousePressed = true;
  }

  // Mouse was released
  mouseReleased() {
    this.mousePressed = false;
  }

  // Mimics a drag event and changes the background color of a box that was entered with the currently selected color
  boxEntered(row,column) {
    if(this.color!='') {
      let modifiedString = this.color.slice(5);
      modifiedString = modifiedString.split(",");
      if(this.mousePressed) {
        this.boxBackground[row][column] = modifiedString[0] + ',' + modifiedString[1] + ',' + modifiedString[2];
      }
    }
  }

  // Resets all the colors back to their original state
  resetColors() {
    for(let i = 0; i<8; i++) {
      for(let j = 0; j<16; j++) {
        this.boxBackground[i][j]='241,241,241';
      }
    }
    this.code = '';
  }

  showCodeGeneration(): void {
    this.code = '';
    for(let i = 0; i<16; i++) {
      for(let j = 0; j<8; j++) {
        // Sometimes undefined shows up if the drag portion fails, so check if the color was changed
        if(this.boxBackground[j][i]!='241,241,241'&&this.boxBackground[j][i]!=',undefined,undefined')
        // Prodcedural code to generate for displaying on the Midi Mosaic
        this.code = this.code + `\n  setBlockColor(`+ ((i*8)+(j+1)) +`,led_strip_1.Color(`+ this.boxBackground[j][i] +`))`;
      }
    }
    // Show the code generation modal
    let dialogRef = this.dialog.open(CodeGeneration, {
      width: '500px',
      height: '500px',
      data: {code:this.code}
    });

    dialogRef.afterClosed().subscribe(result => {
      // If you want to perform any operation when the dialog is closed, here's where you would want to put your code.
    });
  }
}


@Component({
  selector: 'code-generation',
  templateUrl: 'code-generation.html',
  styleUrls: ['./code-generation.css']
})
export class CodeGeneration {

  copyClicked: any;

  constructor(
    public dialogRef: MatDialogRef<CodeGeneration>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

   onNoClick(): void {
    this.dialogRef.close();
    }

    changeCopy() {
      this.copyClicked = 'true';
    }
}
