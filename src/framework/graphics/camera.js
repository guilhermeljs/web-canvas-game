import Vector2 from "../models/math/Vector2.js";

class Camera {
    constructor(viewportWidth, viewportHeight, resolutionX, resolutionY){
        this.scalingFactor = ((resolutionX/800) + (resolutionY/600))/2;
        this.resolutionX = resolutionX;
        this.resolutionY = resolutionY;
        this.viewportHeight = viewportHeight;
        this.viewportWidth = viewportWidth;
        this.position = new Vector2(0,0);
    }

    WorldToScreenPos(worldPos){
        return new Vector2((this.resolutionX/this.viewportWidth)*worldPos.x, this.resolutionY-(this.resolutionY/this.viewportHeight)*worldPos.y);
    }

    ScreenToWorldPos(screenPos){
        return new Vector2(screenPos.x/(this.resolutionX/this.viewportWidth), screenPos.y/this.resolutionY-(this.resolutionY/this.viewportHeight));
    }
}

export default Camera;