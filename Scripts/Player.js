class Player {
    constructor(x, y, canvasWidth, canvasHeight, gameController) {
        
        this.width = 90;
        this.height = 120;
        this.x = canvasWidth / 2 - this.width / 2;;
        this.y = canvasHeight - this.height - 10;
        this.speed = 6;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.gameController = gameController;
        this.image = new Image();
        this.fireType = 'normal';
        this.lives = 3;
        this.score = 0;
        this.visible = true;
        this.image.src = '../Assets/CIUIonBlasterLV5.png';
        document.addEventListener('keydown', this.handleKeyDown.bind(this));

    }

    draw(ctx) {
        if (this.visible) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            console.log("player x= ", this.x, " and y= ", this.y);
        }
        //ctx.font = '24px Arial';   //score
        //ctx.fillStyle = '#ffffff';
        //ctx.fillText(`Score: ${this.score}`, this.canvasWidth - 150, 30); 
        for (let i = 0; i < this.lives; i++) {
            const lifeImage = new Image();
            lifeImage.src = '../Assets/life.png';
            ctx.drawImage(lifeImage, this.canvasWidth - 50 - i * 30, 20, 25, 25);
        }

    }

    loseLife() {
        this.lives--;
        console.log("lives now= ", this.lives);
        if (this.lives === 0) {
            this.gameController.gameState = 'lose';
            console.log('Game Over');
        }
    };


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

    //increaseScore(points) {
    //    this.score += points;
    //}

    handleCollision(entity) {
        this.visible = false;
        this.loseLife();
        console.log("lives now=", this.lives);
        if (this.lives > 0) {
            //console.log("mafrod this.lives more than 0 -> lives now=", this.lives);
            setTimeout(() => {
                this.respawn();
                this.visible = true;
            }, 2000);
        } else {
            //console.log("mafrod this.lives less than or equal 0 -> lives now=", this.lives);
            this.gameController.gameState = 'lose';
            //console.log('Game Over');
            window.location.href = '/Home/losing';
        }
    }


    respawn() {
        this.isDestroyed = false;
        this.x = this.canvasWidth / 2 - this.width / 2; //center of the canvas horizontally
        this.y = this.canvasHeight - this.height - 10; //   bottom of the canvas
        if (!maxLoss) {
            maxLoss++;
        }
        //console.log("respawned player x= ", this.x, " and y= ", this.y);
    }

}



