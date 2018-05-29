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
  mousePressed: boolean = false;
  color: any = '';
  code: any = '';

  constructor(public dialog: MatDialog) {
    for(let i = 0; i<8; i++) {
      for(let j = 0; j<16; j++) {
        this.boxBackground[i][j]='241,241,241';
      }
    }
    this.code=`int i = 26;
    for(int i=6; i>=0; i++) {
      string.print("Something");
    }
    for(int i=6; i>=0; i++) {
      string.print("Something");
    }
    for(int i=6; i>=0; i++) {
      string.print("Something");
    }
    for(int i=6; i>=0; i++) {
      string.print("Something");
    }
    for(int i=6; i>=0; i++) {
      string.print("Something");
    }
    for(int i=6; i>=0; i++) {
      string.print("Something");
    }
    for(int i=6; i>=0; i++) {
      string.print("Something");
    }
    for(int i=6; i>=0; i++) {
      string.print("Something");
    }
    for(int i=6; i>=0; i++) {
      string.print("Something");
    }
    for(int i=6; i>=0; i++) {
      string.print("Something");
    }
    for(int i=6; i>=0; i++) {
      string.print("Something");
    }
    for(int i=6; i>=0; i++) {
      string.print("Something");
    }
    `;
  }

  boxClicked(row, column) {
    let modifiedString = this.color.slice(5);
    modifiedString = modifiedString.split(",");
    this.boxBackground[row][column] = modifiedString[0] + ',' + modifiedString[1] + ',' + modifiedString[2];
  }

  mouseClicked() {
    this.mousePressed = true;
  }

  mouseReleased() {
    this.mousePressed = false;
  }

  boxEntered(row,column) {
    if(this.color!='') {
      let modifiedString = this.color.slice(5);
      modifiedString = modifiedString.split(",");
      if(this.mousePressed) {
        this.boxBackground[row][column] = modifiedString[0] + ',' + modifiedString[1] + ',' + modifiedString[2];
      }
    }
  }

  resetColors() {
    for(let i = 0; i<8; i++) {
      for(let j = 0; j<16; j++) {
        this.boxBackground[i][j]='241,241,241';
      }
    }
  }

  showCodeGeneration(): void {
    let dialogRef = this.dialog.open(CodeGeneration, {
      width: '500px',
      height: '500px',
      data: { yes:"yes",no:"no",code:this.code}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
