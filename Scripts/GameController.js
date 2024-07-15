
class GameController {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.player = new Player(700, 500, this.canvas.width, this.canvas.height, this);
        this.fires = []; 
        this.chickens = [];
        this.gameState = 'initial';
        this.setup();
    }

    setup() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        this.generateInitialChicken();
    }

   

    handleKeyDown(event) {
        this.player.handleKeyDown(event);
    }

    update() {
        this.player.update();
        this.updateFires();
        this.checkStateTransition();
        this.updateChickens();
        this.checkCollisions();
    }

    updateFires() {
        this.player.update();
        this.fires.forEach(fire => fire.update());
        this.fires = this.fires.filter(fire => fire.y >= 0); 
    }
    //animateChickenEntry(chicken) {
    //    const animateEntry = () => {
    //        chicken.flyIn();
    //        if (!chicken.isFlyingIn) {
    //            clearInterval(animationInterval);
    //        }
    //    };
    //    const animationInterval = setInterval(animateEntry, 1000 / 60); // Adjust speed as needed
    //}

    
    updateChickens() {
        this.chickens.forEach(chicken => chicken.update(this.gameState));

        if (this.gameState === 'matrix') {
            this.chickens.forEach(chicken => {
                if (chicken.row % 2 === 0) {
                    chicken.x += 2; 
                } else {
                    chicken.x -= 2; 
                }

                // don't move outside canvas bounds
                if (chicken.x < 0) {
                    chicken.x = 0;
                }
                if (chicken.x + chicken.width > this.canvas.width) {
                    chicken.x = this.canvas.width - chicken.width;
                }
            });
        }
        
    }

    draw() {
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.player.draw(this.ctx);
        this.drawFires();
        this.chickens.forEach(chicken => chicken.draw(this.ctx));
    }

    drawFires() {
        this.fires.forEach(fire => fire.draw(this.ctx));
    }

    startGame() {
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / 60); 
    }

    addFire(fire) {
        this.fires.push(fire);
    }

    generateInitialChicken() {
        const type = Math.random() > 0.5 ? 'blue' : 'red';
        const x = Math.random() * (this.canvas.width - 180); 
        const y = Math.random() * (this.canvas.height - 180);
        console.log("chicken dimensions start x= ", x, " y= ", y);
        const chicken = new Chicken(180,180,x, y, type, this.canvas.width, this.canvas.height);
        this.chickens.push(chicken);
        //this.animateChickenEntry(chicken); 
    }

   
    generateChickenMatrix() {
        const rows = 4;
        const columns = 7;
        const spacing = 20;
        const chickenWidth = 130;
        const chickenHeight = 130;

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < columns; col++) {
                    const x = row % 2 === 0 ? col * (chickenWidth + spacing) : this.canvas.width - (col * (chickenWidth + spacing) + chickenWidth);
                    const y = row * (chickenHeight + spacing);
                    const type = Math.random() > 0.5 ? 'blue' : 'red';
                    const chicken = new Chicken(chickenWidth, chickenHeight, x, y, type, this.canvas.width, this.canvas.height, row);
                    this.chickens.push(chicken);
                    //this.animateChickenEntry(chicken);
                }
        }
        
    }

    checkStateTransition() {
        if (this.gameState === 'initial' && this.chickens.length === 0) {
            this.gameState = Math.random() > 0.5 ? 'matrix' : 'matrixFree';
            this.generateChickenMatrix();
        }
    }

    checkCollisions() {
        this.fires.forEach(fire => {
            this.chickens.forEach(chicken => {
                if (chicken.checkCollision(fire)) {
                    chicken.isHit = true;
                    fire.isHit = true;
                }
            });
        });
        this.fires = this.fires.filter(fire => !fire.isHit);
        this.chickens = this.chickens.filter(chicken => !chicken.isHit);
    }
}
