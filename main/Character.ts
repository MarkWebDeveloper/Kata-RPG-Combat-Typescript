export class Character {

    private _health: number
    private _level: number
    private _isAlive: boolean

    constructor() {
        this._health = 1000;
        this._level = 1;
        this._isAlive = true;
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
}