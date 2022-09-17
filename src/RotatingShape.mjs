export class RotatingShape {
    shapeString;
    muteString;
  

    constructor(shapeString) {

        this.shapeString = shapeString.replaceAll(" ", "") +"\n";
       this.muteString = this.shapeString;

    }

    rotateRight() {
        var letterArray = this.shapeString.replaceAll("\n", "").split("")
        var breedte = Math.sqrt(letterArray.length)
        const res = [];
        for (let i = 0; i < letterArray.length; i += breedte) {
            const chunk = letterArray.slice(i, i + breedte);
            res.push(chunk);
        }
    console.log(res)
       
        var returnLijst = [];

        for (var column = 0; column < res.length; column++) {
            for (var row = 0; row <column; row++) {
             
              var temp = res[column][row];
              res[column][row] = res[row][column];
              res[row][column] = temp;
            }
          }

          for (var column = 0; column < res.length; column++) {
            var eerste = column
            var laatste = breedte - column-1
           
            if (eerste!=laatste && laatste<breedte-1) {
              
                for (var row = 0; row <3; row++) {
             
                    var temp = res[row][eerste];
                    res[row][eerste] = res[row][laatste];
                    res[row][laatste] = temp;
                    
                  }
                
            }
           
          }

         var returnArray = Array.prototype.concat.apply([], res);
         
  

        for (let index = 0; index < returnArray.length; index++) {
            const element = returnArray[index];
            returnLijst.push(element);
            if ((index + 1) % breedte == 0 && index > 0) {
                returnLijst.push("\n");
            }
        }

        this.muteString = returnLijst.join("");
        return this
        
      




    }
    

    toString() {

        return this.muteString;
    }


}

