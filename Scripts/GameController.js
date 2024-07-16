class GameController {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.player = new Player(700, 500, this.canvas.width, this.canvas.height, this);
        this.fires = []; 
        this.chickens = [];
        this.eggs = []; 
        this.gifts = [];
        this.drumsticks = []; 
        this.gameState = 'initial';
        this.boss = null; 
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
        this.updateEggs();
        this.updateGifts();
        if (this.gameState === 'boss') {
            this.updateBoss();
        }
                
    }

    //updateDrumsticks() {
    //    this.drumsticks.forEach(drumstick => drumstick.update());
    //    this.drumsticks = this.drumsticks.filter(drumstick => drumstick.y <= this.canvas.height); // Remove drumsticks off-screen
    //}
    

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
    
    updateBoss() {
        if (this.boss) {
            this.boss.update();
        }
    }
        

    updateEggs() {
        if (this.gameState === 'eggRain' && Math.random() < 0.02) { 
            const x = Math.random() * (this.canvas.width - 90); //within bounds
            const y = -120; 
            const type = Math.random() > 0.5 ? 'blue' : 'red';
            const egg = new Egg(x, y, type);
            this.eggs.push(egg);
        }
        this.eggs.forEach(egg => egg.update());  //existing eggs
        this.eggs = this.eggs.filter(egg => egg.y <= this.canvas.height); //remove eggs off-screen
    }

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

    updateGifts() {
        this.gifts.forEach(gift => gift.update());
        this.gifts = this.gifts.filter(gift => gift.y <= this.canvas.height);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.ctx);
        
        this.drawFires();
        this.chickens.forEach(chicken => chicken.draw(this.ctx));

        this.drawEggs();
        this.drawGifts();
        //this.drawDrumsticks();
        if (this.gameState === 'boss' && this.boss) {
            this.boss.draw(this.ctx);
        }
    }

    drawEggs() {
        this.eggs.forEach(egg => egg.draw(this.ctx));
    }

    drawFires() {
        this.fires.forEach(fire => fire.draw(this.ctx));
    }

    drawGifts() {
        this.gifts.forEach(gift => gift.draw(this.ctx));
    }

    //drawDrumsticks() {
    //    this.drumsticks.forEach(drumstick => drumstick.draw(this.ctx));
    //}

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
                    //console.log("chicken row = ", row, " ,col= ", col, " generated");
                }
            console.log("generated row= ", row);
        }
        
    }

    getRandomIndices(total, count) {
        const indices = [];
        while (indices.length < count) {
            const randomIndex = Math.floor(Math.random() * total);
            if (!indices.includes(randomIndex)) {
                indices.push(randomIndex);
            }
        }
        return indices;
    }
    generateEggs() {
        const numEggs =12;
        const giftEggIndices = this.getRandomIndices(numEggs, 5);

        for (let i = 0; i < numEggs; i++) {
            const x = Math.random() * (this.canvas.width - 90);
            const y = -120;
            const type = Math.random() > 0.5 ? 'blue' : 'red';
            const egg = new Egg(x, y, type);

            if (giftEggIndices.includes(i)) {
                egg.hasGift = true;
            }

            this.eggs.push(egg);
        }
    }

    spawnBoss() {
        const bossX = (this.canvas.width - 200) / 2;
        const bossY = -200;
        this.boss = new Boss(bossX, bossY, this.canvas.width);
    }

    checkStateTransition() {
        if (this.gameState === 'initial' && this.chickens.length === 0) {
            this.gameState = 'matrix';
            console.log("gamestate now= ", this.gameState);
            this.generateChickenMatrix();
        }
        else if (this.gameState === 'matrix' && this.chickens.length === 0) {
            this.gameState = 'eggRain';
            console.log("gamestate now= ", this.gameState);
            this.generateEggs();
        }
        else if (this.gameState === 'eggRain' && this.eggs.length === 0) {
            this.gameState = 'boss';
            this.spawnBoss();
        } else if (this.gameState === 'win' ) {
            console.log("gamestate now= ", this.gameState);
            //alert("YOU WIN ");
        } else if (this.gameState === 'lose') {
            console.log('loser!');
            window.location.href = '/Home/losing';
        }
    }

 

    checkCollisions() {
        //between player and gifts
        this.gifts.forEach(gift => {
            if (this.checkCollision(this.player, gift)) {
                gift.isHit = true;
                this.player.collectGift(gift);
            }
        });

        //between player and eggs
        this.eggs.forEach(egg => {
            if (this.checkCollision(this.player, egg)) {
                egg.isHit = true;
                this.player.handleCollision(egg);
            }
        });

        //with boss 
        //with strikes

        // Check collisions between player and chickens
        this.chickens.forEach(chicken => {
            if (this.checkCollision(this.player, chicken)) {
                chicken.isCollide = true;
                this.player.handleCollision(chicken);
            }
        });

        // Handle collisions between player fires and game entities
        this.fires.forEach(fire => {
            this.chickens.forEach(chicken => {
                if (chicken.checkCollision(fire)) {
                    chicken.isHit = true;
                    fire.isHit = true;
                    const drumstickL = new DrumStick(chicken.x, chicken.y, 'L');
                    const drumstickR = new DrumStick(chicken.x + chicken.width - 50, chicken.y, 'R');
                    this.drumsticks.push(drumstickL);
                    this.drumsticks.push(drumstickR);
                }
            });

            this.eggs.forEach(egg => {
                if (egg.checkCollision(fire)) {
                    egg.isHit = true;
                    fire.isHit = true;
                    if (egg.hasGift) {
                        const giftType = Math.random() > 0.5 ? '../Assets/GIFT.png' : '../Assets/GIFT2.png';
                        const gift = new Gift(egg.x, egg.y, giftType);
                        this.gifts.push(gift);
                    }
                }
            });

            if (this.boss && this.boss.checkCollision(fire)) {
                fire.isHit = true;
                this.boss.takeDamage(fire.fireType);
                if (this.boss.health <= 0) {
                    this.boss = null; // boss defeated
                    this.gameState = 'win';
                }
            }
        });

        // Filter out entities that are hit
        this.fires = this.fires.filter(fire => !fire.isHit);
        this.chickens = this.chickens.filter(chicken => !chicken.isHit);
        this.eggs = this.eggs.filter(egg => !egg.isHit);
        this.gifts = this.gifts.filter(gift => !gift.isHit);
        this.drumsticks = this.drumsticks.filter(drumstick => !drumstick.isHit);
    }

    checkCollision(obj1, obj2) {
        return obj1.x < obj2.x + obj2.width &&
            obj1.x + obj1.width > obj2.x &&
            obj1.y < obj2.y + obj2.height &&
            obj1.y + obj1.height > obj2.y;
    }
}
