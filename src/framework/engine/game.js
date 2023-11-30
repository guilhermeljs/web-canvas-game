import Camera from "../graphics/camera.js";
import GameRenderer from "../graphics/renderer.js";
import InputHandler from "../input/inputHandler.js";
import InputState from "../models/InputState.js";
import GameLoop from "./gameLoop.js";

class Game {
    constructor(canvas, width, height, maxFps){
        this.gameLoop = new GameLoop(maxFps);
        this.camera = new Camera(12,8,width,height);
        this.renderer = new GameRenderer(this.camera);
        this.inputState = new InputState();
        this.inputHandler = new InputHandler(this.inputState);

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.gameLoop.update = (gameTime)=>this.update(gameTime);
        this.onUpdateFunctions = []

        this.gameLoop.start();
    }

    onUpdate(func){
        this.onUpdateFunctions.push(func);
    }

    update(elapsedTime){
        this.renderer.render(this.ctx);

        for (let i = 0; i < this.onUpdateFunctions.length; i++){
            this.onUpdateFunctions[i](elapsedTime);
        }
    }
}

export default Game;