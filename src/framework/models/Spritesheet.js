import Sprite2D from "./Sprite2D";

class Spritesheet extends Sprite2D {
    constructor(image, rows,columns){
        super(image);
        this.image = image;
        this.rows = rows;
        this.columns = columns;
        this.sprites = []
    }

    getSprite(index){
        
    }
}