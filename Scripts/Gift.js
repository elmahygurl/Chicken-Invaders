class Gift {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.width = 50; 
        this.height = 50; 
        this.image = new Image();
        this.image.src = type;
        //this.image.src = type === 'blue' ? '../Assets/GIFT.png' : '../Assets/GIFT2.png';
        this.isHit = false;
    }

    update() {
        this.y += 3; 
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
