import Game from "./framework/engine/game.js";
import Sprite2D from "./framework/models/Sprite2D.js";
import Text from "./framework/models/Text.js";
import Vector2 from "./framework/models/math/Vector2.js";

const canvas = document.getElementById("game-canvas");

const width_input = document.getElementById("width-window");
const height_input = document.getElementById("height-window");

width_input.addEventListener("change", (ev)=>{
    canvas.width = ev.target.value;

});

height_input.addEventListener("change", (ev)=>{
    canvas.height = ev.target.value;
});

let game = new Game(canvas, canvas.clientWidth, canvas.clientHeight, 60);
game.ctx.imageSmoothingEnabled = false;

let img = new Image();
img.src = "/images/character.png";
let currentFrame = 0;
let currentFPS = 0;

setInterval(()=>{currentFPS = currentFrame; currentFrame = 0; fpsText.text = "FPS: " + currentFPS}, 1000)

let fpsText = new Text("FPS: 0");
fpsText.position = new Vector2(16,16)
game.renderer.addObject(fpsText);


let posText = new Text("Player Position: (0;0)");
posText.position = new Vector2(16,32)
game.renderer.addObject(posText);

let camText = new Text("Camera Position: (0;0)");
camText.position = new Vector2(16,48)
game.renderer.addObject(camText);

game.onUpdate((elapsedTime)=>{
    currentFrame++;
});

let tile = new Image();
tile.src = "/images/tile.png";


let map = []

function generateMap(){
    for(let i = 0; i < 15; i++){
        for(let x = 0; x < 15; x++){
            let spr = new Sprite2D(tile);

            spr.position.x = x * 0.2768;
            spr.position.y = i * 0.23;
            spr.scale = new Vector2(0.00147*game.canvas.width,0.00147*game.canvas.width);
            //spr.scale = new Vector2(x,0.00147*game.canvas.width);
            game.renderer.addObject(spr);
            map.push(spr);
        }
    }
}

function clearMap(){
    for(let i = 0; i < map.length; i++){
        game.renderer.removeObject(map[i]);
    }
}

generateMap();

img.onload = ()=>{
    let spr = new Sprite2D(img);
    spr.pixelsPerUnit = 1;
    spr.position = new Vector2(0,0)
    spr.scale = new Vector2(0.00147*game.canvas.width,0.00147*game.canvas.width);

    game.renderer.addObject(spr);
    let walkCooldown = 0;

    game.onUpdate(deltaTime=>{
        posText.text = "Player Position: (" + spr.position.x + ";"+ spr.position.y+")";
        camText.text = "Camera Position: (" + game.camera.position.x + ";" + game.camera.position.y+")";

        /*if(game.inputState.getKeyDown("d"))
            spr.position.x += 0.0015 * deltaTime;
        if(game.inputState.getKeyDown("a"))
            spr.position.x -= 0.0015 * deltaTime;
        if(game.inputState.getKeyDown("w"))
            spr.position.y += 0.0015 * deltaTime;
        if(game.inputState.getKeyDown("s"))
            spr.position.y -= 0.0015 * deltaTime;*/

        if(walkCooldown <= 0){
            if(game.inputState.getKeyDown("d")){
                spr.position.x += 0.01;
            }
            if(game.inputState.getKeyDown("a")){
                spr.position.x -= 0.01;
            }
            if(game.inputState.getKeyDown("w")){
                spr.position.y += 0.01;
            }
            if(game.inputState.getKeyDown("s")){
                spr.position.y -= 0.01;
            }
        }

        if(walkCooldown > 0){
            walkCooldown -= deltaTime;
        }

        if(game.inputState.getKeyDown("q")){
            if(game.renderer.camera.scalingFactor <= 1)
                return;
            game.renderer.camera.scalingFactor -= 0.5;
        }

        if(game.inputState.getKeyDown("arrowright"))
            game.camera.position.x += 0.0015 * deltaTime;
        if(game.inputState.getKeyDown("arrowleft"))
            game.camera.position.x -= 0.0015 * deltaTime;
        if(game.inputState.getKeyDown("arrowup"))
            game.camera.position.y += 0.0015 * deltaTime;
        if(game.inputState.getKeyDown("arrowdown"))
            game.camera.position.y -= 0.0015 * deltaTime;

        if(game.inputState.getKeyDown("e")){
            if(game.renderer.camera.scalingFactor >= 5)
                return;
            game.renderer.camera.scalingFactor += 0.5;
        }
    });
}