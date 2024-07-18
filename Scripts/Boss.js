class Boss {
    constructor(x, y, canvasWidth) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.image = new Image();
        this.image.src = '../Assets/UCO.png';
        this.isHit = false;
        this.health = 70;
        this.speedX = Math.random() * 6 + 4; //random speed between 4 and 10
        this.direction = 1; // 1 for moving right, -1 for moving left
        this.canvasWidth = canvasWidth;
        this.strikes = [];
        this.strikeInterval = setInterval(() => this.emitStrike(), 1800); 
        this.isCollide = false;
    }

    update() {
        if (this.y < 50) {
            this.y += 2;
        }
        else {
            this.x += this.speedX * this.direction;
            
            if (this.x <= 0 || this.x + this.width >= this.canvasWidth) {
                this.direction *= -1;
            }
        }
        
        this.strikes.forEach(strike => strike.update());
        
        this.strikes = this.strikes.filter(strike => strike.y <= this.canvasWidth);
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.strikes.forEach(strike => strike.draw(ctx));
    }

    
    emitStrike() {
        const strikeX = this.x + this.width / 2 - 20; //centre of boss
        const strikeY = this.y + this.height;
        const leftStrike = new Strike(strikeX, strikeY, (3 * Math.PI) / 4,  'L'); 
        const downStrike = new Strike(strikeX, strikeY, Math.PI / 2, 'N'); 
        const rightStrike = new Strike(strikeX, strikeY,  Math.PI / 4, 'R'); 

        this.strikes.push(leftStrike, downStrike, rightStrike);
    }

    checkCollision(fire) {
        return this.x < fire.x + fire.width &&
            this.x + this.width > fire.x &&
            this.y < fire.y + fire.height &&
            this.y + this.height > fire.y;
    }

    takeDamage(fireType) {
        if (fireType === 'super') {
            this.health -= 2; 
            console.log("this. health now = ", this.health);
        } else {
            console.log("this. health now = ", this.health);
            this.health -= 1; 
        }
    }
}