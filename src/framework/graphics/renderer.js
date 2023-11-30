import Camera from "./camera.js";

class GameRenderer {
    constructor(gameCamera){
        this.camera = gameCamera;
        this.gameObjects = [];
    }

    addObject(object){
        this.gameObjects.push(object);
    }

    removeObject(object){
        let ind = this.gameObjects.findIndex((x)=>x===object);

        if(ind === -1)
            return;

        this.gameObjects.splice(ind, 1);
    }

    render(canvasContext2D){
        canvasContext2D.clearRect(0, 0, canvasContext2D.canvas.width, canvasContext2D.canvas.height);

        this.gameObjects.forEach(element => {
            if(element.draw !== undefined)
                element.draw(canvasContext2D, this.camera)
        });
    }
}

export default GameRenderer;