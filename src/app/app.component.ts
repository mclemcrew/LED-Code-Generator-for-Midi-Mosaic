import { Component } from '@angular/core';

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
  color: any;

  constructor() {
    for(let i = 0; i<8; i++) {
      for(let j = 0; j<16; j++) {
        this.boxBackground[i][j]='241,241,241';
      }
    }
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
    let modifiedString = this.color.slice(5);
    modifiedString = modifiedString.split(",");
    if(this.mousePressed) {
      this.boxBackground[row][column] = modifiedString[0] + ',' + modifiedString[1] + ',' + modifiedString[2];
    }
  }

  resetColors() {
    for(let i = 0; i<8; i++) {
      for(let j = 0; j<16; j++) {
        this.boxBackground[i][j]='241,241,241';
      }
    }
  }
}
