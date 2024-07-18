class Strike {
    constructor(x, y,angle,type) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 100;
        this.image = new Image();
        this.speedY = 7; // speed moves downwards
        this.isHit = false;
        this.angle = angle; //angle for x direction
        this.speedX = 4; //horizontal speed
        
        if (type === 'L') {
            this.image.src = '../Assets/strikeL.png';
        } else if (type === 'R') {
            this.image.src = '../Assets/strikeR.png';
        } else {
            this.image.src = '../Assets/strike.png';
        }
        
    }

    update() {
        this.y += this.speedY;
            this.x += this.speedX * Math.cos(this.angle);
        
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    //checkCollision(obj) {
    //    return this.x < obj.x + obj.width &&
    //        this.x + this.width > obj.x &&
    //        this.y < obj.y + obj.height &&
    //        this.y + this.height > obj.y;
    //}
}
