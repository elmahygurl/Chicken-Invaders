class MotherHenShip {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.width = 200; 
        this.height = 200;
        this.x = (canvasWidth - this.width) / 2;
        this.y = -this.height; // Start off-screen at the top
        
        this.isHit = false;
        this.eggs = [];
        this.generateEggs();

        // Load mother hen ship image
        this.image = new Image();
        this.image.src = '../Assets/UCO.png';

        // Timer for egg dropping
        this.eggDropInterval = setInterval(() => {
            this.dropEgg();
        }, 1000); // Adjust drop interval as needed
    }

    draw(ctx) {
        //if (!this.isHit) {
        //    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        //    this.eggs.forEach(egg => egg.draw(ctx));
        //}
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

        // Draw eggs
        this.eggs.forEach(egg => {
            egg.draw(ctx);
        });
    }

    update() {
        if (!this.isHit) {
            this.y += 2; // Adjust speed as needed for the ship's descent

            // Update eggs
            this.eggs.forEach(egg => {
                egg.update();
            });

            // Remove eggs that are off-screen
            this.eggs = this.eggs.filter(egg => egg.y <= this.canvasHeight);
        }
    }

    dropEgg() {
        const type = Math.random() > 0.5 ? 'blue' : 'red';
        const egg = new Egg(this.x + this.width / 2, this.y + this.height,type); 
        this.eggs.push(egg);
    }

    generateEggs() {
        setInterval(() => {
            const x = this.x + this.width / 2; // Position eggs at the center of the ship
            const y = this.y + this.height; // Start just below the ship
            const egg = new Egg(x, y);
            this.eggs.push(egg);
        }, 1000); // Adjust egg generation interval as needed
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
