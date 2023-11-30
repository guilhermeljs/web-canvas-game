import Vector2 from "./math/Vector2.js";

class InputState {
    constructor() {
        this.leftMousePressed = false;
        this.middleMousePressed = false;
        this.rightMousePressed = false;
        this.mousePos = new Vector2(0,0);
        this.pressedKeys = []
    }

    getKeyDown(key){
        if(this.pressedKeys.find(x=>x===key.toLowerCase()))
            return true;
        return false;
    }

    getRightMouseDown(){
        return this.rightMousePressed;
    }

    getLeftMouseDown(){
        return this.leftMousePressed;
    }

    getMiddleMouseDown(){
        return this.middleMousePressed;
    }
    
    pressMiddleMouse(){
        this.middleMousePressed = true;
    }

    releaseMiddleMouse(){
        this.middleMousePressed = false;
    }
    
    pressRightMouse(){
        this.rightMousePressed = true;
    }

    pressLeftMouse(){
        this.leftMousePressed = true;
    }

    releaseLeftMouse(){
        this.leftMousePressed = false;
    }
    
    releaseRightMouse(){
        this.rightMousePressed = false;
    }

    pressKey(key){
        if(this.pressedKeys.find(x=>x===key.toLowerCase()))
            return;
        this.pressedKeys.push(key.toLowerCase());
    }

    releaseKey(key){
        let pk = this.pressedKeys.findIndex(x=>x===key.toLowerCase());
        if(pk === -1)
            return;
        this.pressedKeys.splice(pk, 1);
    }
}

export default InputState;