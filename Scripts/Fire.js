class Fire {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.width = 20; 
        this.height = 20; 
        this.speed = 10; 
        this.image = new Image();
        this.image.src = '/Assets/CIUBoronRailgunLV2.png';
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update() {
        
        this.y -= this.speed;  //to move upwards
    }
}
