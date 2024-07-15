class Boss {
    constructor(x, y, imageUrl) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.image = new Image();
        this.image.src = imageUrl;
        this.isHit = false;
    }

    update() {
        if (this.y < 50) {
            this.y += 2;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}