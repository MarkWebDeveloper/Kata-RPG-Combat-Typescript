export class Character {

    health: number
    level: number
    isAlive: boolean

    constructor() {
        this.health = 1000
        this.level = 1
        this.isAlive = true
    }

    attack(enemy: Character) {

        if(enemy.health <= 20) {
            enemy.health = 0
            enemy.isAlive = false
            return
        }

        enemy.health -= 20
    }

    heal(friend: Character) {

        if(friend.isAlive == false || friend.health == 0) {
            return
        }

        friend.health += 10
    }

}