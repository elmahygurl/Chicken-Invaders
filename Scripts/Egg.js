class Egg {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.width = 90;
        this.height = 120;
        this.speedY = Math.random() * 2 + 4; 
        this.image = new Image();
        this.image.src = type === 'blue' ? '../Assets/MotherHenShip.png' : '../Assets/MotherHenShip (2).png';
        this.isHit = false;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update() {
        if (!this.isHit) {
            this.y += this.speedY;
        }
    }

    checkCollision(fire) {
        return (
            this.x < fire.x + fire.width &&
            this.x + this.width > fire.x &&
            this.y < fire.y + fire.height &&
            this.y + this.height > fire.y
        );
    }
}