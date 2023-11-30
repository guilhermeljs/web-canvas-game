class InputHandler {
    constructor(inputstate){
        this.state = inputstate;
        this.setupEvents();
    }

    setupEvents(){
        window.addEventListener("keydown", (ev)=>{
            this.state.pressKey(ev.key);
        })

        window.addEventListener("keyup", (ev)=>{
            this.state.releaseKey(ev.key);
        });

        window.addEventListener("mousemove", (ev)=>{
            if(!ev.isTrusted)
                return;

            this.state.mousePos.x = ev.screenX; 
            this.state.mousePos.y = ev.screenY;
        });

        window.addEventListener("mousemove", (ev)=>{
            if(!ev.isTrusted)
                return;

            this.state.mousePos.x = ev.screenX; 
            this.state.mousePos.y = ev.screenY;
        });

        window.addEventListener("mousedown", (ev)=>{
            if(!ev.isTrusted)
                return;

            switch(ev.button){
                case 0:
                    this.state.pressLeftMouse();
                    break;
                case 1:
                    this.state.pressMiddleMouse();
                    break;
                case 2:
                    this.state.pressRightMouse();
                    break;
            }
        });

        window.addEventListener("mouseup", (ev)=>{
            if(!ev.isTrusted)
                return;

            switch(ev.button){
                case 0:
                    this.state.releaseLeftMouse();
                    break;
                case 1:
                    this.state.releaseMiddleMouse();
                    break;
                case 2:
                    this.state.releaseRightMouse();
                    break;
            }
        });
    }
}

export default InputHandler;