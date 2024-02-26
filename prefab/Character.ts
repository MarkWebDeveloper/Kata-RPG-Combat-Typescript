export class Character {

    private _health: number
    private _level: number
    private _isAlive: boolean
    private _baseDamage: number
    private _healingAmount: number

    constructor() {
        this._health = 1000
        this._level = 1
        this._isAlive = true
        this._baseDamage = 100
        this._healingAmount = 200
    }

    public attack(character: Character) {
        // no introducir antes de tiempo
        let currentDamage = this.baseDamage
        // no introducir antes de tiempo
        let levelDifference = character.level - this.level;

        if (character == this) {
            return
        }

        if (character.health <= currentDamage) {
            character.health = 0
            character.isAlive = false
            return
        }

        if (levelDifference >= 5) {
            currentDamage = this.baseDamage / 2;
        } 
        
        if (levelDifference <= -5) {
            currentDamage = this.baseDamage * 1.5
        } 

        // mostrar otro método de escribirlo
        character.health = character.health - currentDamage
    }

    public heal(character: Character) {
        // luego juntar este y el siguiente
        if(character != this) {
            return
        }

        if (character.health == 0 || character.isAlive == false) {
            return
        }

        if (character.health + this._healingAmount > 1000) {
            character.health = 1000
            return
        }

        character.health += this._healingAmount
    }
    
    public get health() : number {
        return this._health
    }
    
    public get level() : number {
        return this._level
    }

    public get isAlive() : boolean {
        return this._isAlive
    }

    public get baseDamage() {
        return this._baseDamage
    }

    public get healingAmount() {
        return this._healingAmount
    }

    public set health(health: number) {
        this._health = health
    }

    public set level(level: number) {
        this._level = level
    }

    public set isAlive(isAlive: boolean) {
        this._isAlive = isAlive
    }

    public set baseDamage(baseDamage: number) {
        this._baseDamage = baseDamage
    }

    public set healingAmount(healingAmount: number) {
        this._healingAmount = healingAmount
    }
}