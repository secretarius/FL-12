class Fighter {
    constructor(object) {
        this.name = object.name;
        this.damage = object.damage;
        this.hp = object.hp;
        this.strength = object.strength;
        this.agility = object.agility;
        this.score = 0
        this.plentyScore = 0;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage;
    }

    getHealth() {
        return this.hp;
    }

    getStrength() {
        return this.strength;
    }

    getAgility() {
        return this.agility;
    }
  
    
    attack(defender) {
        let successful = Math.random();
        let interest = 100;
        let protect = 1 - (defender.getStrength() + defender.getAgility()) / interest;
        if (successful > protect) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
  
    logCombatHistory() {
        console.log(`Name: ${this.getName()}, Wins: ${this.score}, Losses: ${this.plentyScore}`);
    }
  
    heal(healthPoints) {
        let fullHealth = 100;
        let healedHealth = this.hp = this.hp + healthPoints;
        if(healedHealth > fullHealth) {
           this.hp = fullHealth;
        } else {
            this.hp = healedHealth;
        }
    }
  
    dealDamage(reprisalPoints) {
        let reprisalHealth = this.hp = this.hp - reprisalPoints;
        if(reprisalHealth < 0) {
            this.hp = 0;
        } else {
        this.hp = reprisalHealth;
        }
    }
  
    addWin() {
        this.score++;
    }
  
    addLoss() {
        this.plentyScore++;
    }
  }

  const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
  const myFighter2 = new Fighter({name: 'Commodus', damage: 20, hp: 100, strength: 15, agility: 10});

  
