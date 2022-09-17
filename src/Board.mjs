export class Board {
  width;
  height;

  row = -1;
  constructor(width, height) {
    this.width = width;
    this.height = height;
    
    this.falling = "";
    this.blockColor ="";
    this.boardLijst = [];
    for (let index = 0; index < width*height; index++) {
      this.boardLijst.push(".")
      
    }

  }


  makeBoard() {
    var returnLijst = [];

    for (let index = 0; index < this.boardLijst.length; index++) {
      const element = this.boardLijst[index];
returnLijst.push(element);
if ((index+1) % this.width==0 && index > 0) {
  

  returnLijst.push("\n");
}    
    }

   
    return returnLijst.join('')
  }

  drop(blok) {

    if (this.falling.length > 0) {
      throw new Error("already falling")
      return
    }


    this.falling = blok.color
    this.boardLijst[1] = this.falling
    


  }

  tick() {
   
    var index = this.boardLijst.indexOf(this.falling);
    var newindex = index + this.width

    if (this.boardLijst[newindex]=== ".") {
      this.boardLijst[index]="."
      this.boardLijst[newindex]= this.falling
      
    }else{this.falling=""}
 

  }
  hasFalling() {
    return this.falling.length > 0

  }

  toString() {

    return this.makeBoard();
  }
}
