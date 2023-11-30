import GameObject from "./GameObject.js";
import Vector2 from "./math/Vector2.js";

class Sprite2D extends GameObject {
    constructor(image){
        super();
        this.sprite = image;
        this.scale = new Vector2(1,1)
    }

    draw(ctx, cam){
        // TO DO- Suportar multiplas resoluções, para testar troque a resolução de 800x600 para qualquer outra.
        // Deve-se calcular a posição independente da resolução. Dica: Adicionar pixels per unit
        let spriteScreenPos = cam.WorldToScreenPos(this.position);
        let cameraScreenPos = cam.WorldToScreenPos(cam.position);
        ctx.drawImage(this.sprite, (spriteScreenPos.x - cameraScreenPos.x) * cam.scalingFactor, (spriteScreenPos.y-cameraScreenPos.y) * cam.scalingFactor, this.sprite.width * cam.scalingFactor * this.scale.x, this.sprite.height * cam.scalingFactor * this.scale.y);
    }
}

export default Sprite2D;