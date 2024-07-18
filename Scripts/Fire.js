class Fire {
    constructor(x, y,type) {
        this.x = x; 
        this.y = y; 
        this.width = 22; 
        this.height = 20; 
        this.speed = 10; 
        this.image = new Image();
        //this.fireType = type.includes('../Assets/SuperVulcanChaingunLV12.png') ? 'super' : 'normal';
        //this.image.src = type;
        this.fireType = type === 'super' ? 'super' : 'normal';
        this.image.src = type === 'super' ? '../Assets/SuperVulcanChaingunLV12.png' : '../Assets/CIUBoronRailgunLV2.png';
        this.isHit = false;
        //this.image.src = '/Assets/CIUBoronRailgunLV2.png';
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update() {
        
        this.y -= this.speed;  //to move upwards
    }
}
