export class Character {

    private _health: number
    private _level: number
    private _isAlive: boolean

    constructor() {
        this._health = 1000
        this._level = 1
        this._isAlive = true
    }

    public attack(character: Character) {
        let attackStrength = 100

        if (character.health <= attackStrength) {
            character.health = 0
            character.isAlive = false
            return
        }

        character.health = character.health - 100
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

    public set health(health: number) {
        this._health = health
    }

    public set level(level: number) {
        this._level = level
    }

    public set isAlive(isAlive: boolean) {
        this._isAlive = isAlive
    }
}