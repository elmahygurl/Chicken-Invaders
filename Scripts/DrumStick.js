class DrumStick {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.type = type; // 'L' or 'R' for left and right drumsticks
        this.image = new Image();
        if (this.type === 'L') {
            this.image.src = '../Assets/drumstickL.png';
        } else if (this.type === 'R') {
            this.image.src = '../Assets/drumstickR.png';
        }
        //this.speedY = 4; // speed downwards
        //this.rotation = 0;
        //this.rotationSpeed = Math.random() * 0.1 - 0.05; // random rotation speed
        this.isHit = false;
    }

    update() {
        this.y += 5; 
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        //ctx.translate(this.x + this.width / 2, this.y + this.height / 2); 
        //ctx.rotate(this.rotation); // Rotate around the center
        //ctx.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height); // Draw image centered
        //ctx.restore(); // Restore context to previous state
    }

    checkCollision(player) {
        return this.x < player.x + player.width &&
            this.x + this.width > player.x &&
            this.y < player.y + player.height &&
            this.y + this.height > player.y;
    }
}
