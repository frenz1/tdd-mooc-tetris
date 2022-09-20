


export class Board {
  width;
  height;

  row = -1;
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.falling = "";

    this.boardLijst = [];
    var concString = ""
    for (let i = 0; i < this.height; i++) {


      for (let index = 0; index < this.width; index++) {
        concString += "."

      }

      this.boardLijst.push([concString])
      concString = ""
    }



  }


  makeBoard() {
    var returnLijst = [];

    for (let index = 0; index < this.boardLijst.length; index++) {
      var element = this.boardLijst[index];

      returnLijst.push(element);
      returnLijst.push("\n");





    }


    return returnLijst.join('')
  }

  drop(tetromino) {

    if (this.falling.length > 0) {
      throw new Error("already falling")
      return
    }
    this.falling = tetromino.toString().replaceAll(".", "").charAt(0)


    var boardBreedte = this.width;
    var tetroLijst = tetromino.toString().split("\n")
    var tetrominoLijst = []
    tetroLijst.forEach(element => {
      tetrominoLijst.push(element.split(""))
    });


    var tetrostart = parseInt((boardBreedte - tetroLijst.length) / 2)



    for (let index = 0; index < this.boardLijst.length; index++) {
      var boardStringLijst = this.boardLijst[index].toString().split("");



      var returnLijst = []
      for (let innerindex = 0; innerindex < boardStringLijst.length; innerindex++) {
        var element = boardStringLijst[innerindex];

        if (innerindex >= tetrostart && innerindex < tetrostart + tetroLijst.length - 1 && index < tetroLijst.length - 1) {


          element = tetrominoLijst[index][innerindex - tetrostart]

        }


        returnLijst.push(element)


      }

      this.boardLijst[index] = returnLijst.join("")


    }





  }

  eersteIndex() {

    var notfound = true;
    let begin = 0;

    do {

      const element = this.boardLijst[begin].toString().split("");

      var zoekLetter = element.indexOf(this.falling)

      if (zoekLetter > -1) {
        notfound = false;

        return begin
      }
      begin++;

    } while (notfound && begin < this.boardLijst.length);
    return -1
  }

  laatsteIndex() {



    var eersteindex = this.eersteIndex()

    if (eersteindex > -1) {
      for (let index = eersteindex; index < this.boardLijst.length; index++) {

        const element = this.boardLijst[index].toString().split("");
        var zoekLetter = element.indexOf(this.falling)
        if (zoekLetter == -1) {

          return index -1
        }

      }

    }
    return -1

  }

  tick() {
    

    var laatsteindex = this.laatsteIndex()
    var nextElement = laatsteindex;

    if (laatsteindex > -1) {

      do {

        const element = this.boardLijst[laatsteindex].toString().split("");
        if (laatsteindex < this.boardLijst.length) { 
          nextElement = this.boardLijst[laatsteindex + 1].toString().split(""); } else {
          this.falling = "";
          break;
        }

        for (let i = 0; i < element.length - 1; i++) {


          if (element[i] === this.falling) {

            if (nextElement[i] === ".") {

              nextElement[i] = this.falling;
              element[i] = ".";
            } else { this.falling = "" }
          }

        }
        this.boardLijst[laatsteindex] = element.join("")
        this.boardLijst[laatsteindex + 1] = nextElement.join("")


        laatsteindex--;



      } while (laatsteindex > -1 && this.hasFalling);


    } else { this.falling = "" };
    console.log(this.boardLijst)

  }





  hasFalling() {

    return this.falling.length > 0

  }

  toString() {

    return this.makeBoard();
  }
}
