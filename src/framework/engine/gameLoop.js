class GameLoop {
    constructor(maxFps){
        this.maxFps = maxFps;
        this.lastUpdate = performance.now();
    }

    restart(){
        this.stop();
        this.start();
    }

    start(){
        if(this.loopInterval !== undefined)
            return;
        this.loopInterval = setInterval(()=>this.gameLoop(), 1000 / this.maxFps)
    }

    stop(){
        if(this.loopInterval !== undefined){
            this.loopInterval.cancel();
            this.loopInterval = undefined;
        }
    }

    gameLoop(){
        const elapsed = performance.now() - this.lastUpdate;
        this.update(elapsed)
        this.lastUpdate = performance.now();
    }
}

export default GameLoop;