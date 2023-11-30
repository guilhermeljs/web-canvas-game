import GameObject from "./GameObject.js";

class Text extends GameObject{
    constructor(textValue){
        super();
        this.text = textValue;
    }

    draw(ctx, sizeRatio, cam){
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
}

export default Text;