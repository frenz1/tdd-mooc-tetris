import { RotatingShape } from "../src/RotatingShape.mjs";

export class Tetromino{
   
    static get T_SHAPE() {return new RotatingShape(".T.\nTTT\n...")}
    static get I_SHAPE() {return new RotatingShape('.....\n.....\nIIIII\n.....\n.....')}
    static get O_SHAPE() {return new RotatingShape('.OO\n.OO\n...')}


    

   

}