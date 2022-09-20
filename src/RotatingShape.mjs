export class RotatingShape {
    rotate;

    constructor(shapeString) {

        this.shapeString = shapeString.replaceAll(" ", "")+"\n";

        this.rotate = true;

        if (shapeString.includes("O")) {

            this.rotate = false
            
        }
    
     
      

    }

    rotateRight() {
        if(this.rotate){
           
        var letterArray = this.shapeString.replaceAll("\n", "").split("")
        var breedte = Math.sqrt(letterArray.length)
        const res = [];
        for (let i = 0; i < letterArray.length; i += breedte) {
            const chunk = letterArray.slice(i, i + breedte);
            res.push(chunk);
        }
    
       
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
           
            if (eerste<laatste) {
              
                for (var row = 0; row <breedte; row++) {
             
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
            if ((index + 1) % breedte == 0 && index > 0 && index < returnArray.length-1) {
                returnLijst.push("\n");
            }
        }

        return new RotatingShape(returnLijst.join("")) ;
    }
return this
    }

    rotateLeft() {
        if (this.rotate) {
            
        
        var letterArray = this.shapeString.replaceAll("\n", "").split("")
        var breedte = Math.sqrt(letterArray.length)
        const res = [];
        for (let i = 0; i < letterArray.length; i += breedte) {
            const chunk = letterArray.slice(i, i + breedte);
            res.push(chunk);
        }
    
       
        var returnLijst = [];

        for (var rij = 0; rij < breedte; rij++) {
            for (var kolom = rij+1; kolom <breedte; kolom++) {
               
          
              var temp = res[rij][kolom];
              res[rij][kolom] = res[kolom][rij];
              res[kolom][rij] = temp;
           
            }
          }

          for (var column = 0; column < breedte; column++) {
            var eerste = column
            var laatste = breedte - column-1
           
            if (eerste<laatste) {
              
               var temp2 = res[eerste];
               res[eerste]= res[laatste]
               res[laatste] = temp2
                
            }
           
          }

         var returnArray = Array.prototype.concat.apply([], res);
         
  

        for (let index = 0; index < returnArray.length; index++) {
            const element = returnArray[index];
            returnLijst.push(element);
            if ((index + 1) % breedte == 0 && index > 0&& index < returnArray.length-1) {
                returnLijst.push("\n");
            }
        }

           return new RotatingShape( returnLijst.join(""));
    }
  return this

    }

    
    

    toString() {

        return this.shapeString;
    }


}

