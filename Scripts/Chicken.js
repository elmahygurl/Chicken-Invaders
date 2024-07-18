class Chicken {
    constructor(w,h,x, y, type, canvasWidth, canvasHeight, row = null) {
        this.x = x;
        //this.y = -h; // Start off-screen at the top
        this.y = y;
        this.width = w;
        this.height = h; 
        this.type = type; // blue or red
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.speed = 5; 
        this.isHit = false;
        this.isCollide = false;
        this.speedX = (Math.random() * 4) - 2;
        this.speedY = (Math.random() * 4) - 2;
        this.bottomBoundary = 140;

        this.image = new Image();
        this.image.src = type === 'blue' ? '../Assets/BlueChicken.png' : '../Assets/RedChicken.gif';
        this.row = row; 
        this.initialX = x;
        this.initialY = -h - Math.random() * 200; //for entry from top
        //this.isFlyingIn = true; //flag to indicate if currently flying in
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }


    update(gameState) {
            this.x += this.speedX;
            this.y += this.speedY;

            ////reverse direction if  hits the canvas edges
            //if (this.x <= 0 || this.x + this.width >= this.canvasWidth) {
            //    console.log("went outside canvas");
            //    this.speedX *= -1;
            //}
            //if (this.y <= 0 || this.y + this.height >= this.canvasHeight) {
            //    this.speedY *= -1;
            //}
            // no moving into the last 50px of the canvas height
            if (this.y + this.height > this.canvasHeight - this.bottomBoundary) {
                this.y = this.canvasHeight - this.bottomBoundary - this.height;
                this.speedY *= -1;
            }

            // Reverse direction if hits the canvas edges
            if (this.x <= 0 || this.x + this.width >= this.canvasWidth) {
                console.log("went outside canvas");
                this.speedX *= -1;
            }
            if (this.y <= 0) {
                this.speedY *= -1;
            }

    }



    checkCollision(fire) {
        return (
            fire.x < this.x + this.width &&
            fire.x + fire.width > this.x &&
            fire.y < this.y + this.height &&
            fire.y + fire.height > this.y
        );
    }

     
    
}
