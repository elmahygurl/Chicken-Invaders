class Player {
    constructor(x, y, canvasWidth, canvasHeight, gameController) {
        this.x = x;
        this.y = y; 
        this.width = 120;
        this.height = 150; 
        this.speed = 6; 
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.gameController = gameController;
        this.image = new Image();
        this.fireType = 'normal';
        this.image.src = '../Assets/CIUIonBlasterLV5.png';
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update() {
        //console.log("this.canvasWidth= ", this.canvasWidth);
        if (this.x <= 0) {
            //console.log("we inside the x less than zero and the x is  ",this.x)
            this.x = 0;
        }
        if (this.x + this.width > this.canvasWidth) {
            this.x = this.canvasWidth - this.width;
        }
        if (this.y <= 0) {
            this.y = 0;
        }
        if (this.y + this.height > this.canvasHeight) {
            this.y = this.canvasHeight - this.height;
        }
    }
    
    handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowUp':
                this.y -= this.speed;
                break;
            case 'ArrowDown':
                this.y += this.speed;
                break;
            case 'ArrowLeft':
                this.x -= this.speed;
                break;
            case 'ArrowRight':
                this.x += this.speed;
                break;
            case ' ':
                this.shootFire();
                break;
            default:
                break;
        }
    }

    shootFire() {
        const fireObject = new Fire(this.x + this.width / 2 - 10, this.y, this.fireType); 
        this.gameController.addFire(fireObject);
    }

    collectGift(gift) {
        this.fireType = 'super';
    }
}
