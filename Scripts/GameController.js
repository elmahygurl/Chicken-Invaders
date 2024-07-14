
class GameController {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.player = new Player(700, 500, this.canvas.width, this.canvas.height, this);
        this.fires = []; 
        this.setup();
    }

    setup() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleKeyDown(event) {
        this.player.handleKeyDown(event);
    }

    update() {
        this.player.update();
        this.updateFires();
    }

    updateFires() {
        this.player.update();
        this.fires.forEach(fire => fire.update());
        this.fires = this.fires.filter(fire => fire.y >= 0); 
    }

    draw() {
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.player.draw(this.ctx);
        this.drawFires();
    }

    drawFires() {
        this.fires.forEach(fire => fire.draw(this.ctx));
    }

    startGame() {
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / 60); // 60 FPS
    }

    addFire(fire) {
        this.fires.push(fire);
    }
}
