// Define the Chicken class (example for enemies)
class Chicken {
    constructor(type) {
        this.type = type;
        this.health = 100; // Initial health
    }

    // Method for chicken movement
    move() {
        // Implement movement logic here
        console.log(`${this.type} chicken is moving.`);
    }

    // Method to take damage
    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.type} chicken took ${damage} damage. Health: ${this.health}`);
    }

    // Method to check if chicken is defeated
    isDefeated() {
        return this.health <= 0;
    }
}

// Create an instance of Chicken
//const enemyChicken = new Chicken("Regular");
// Export Chicken class
//export default Chicken;