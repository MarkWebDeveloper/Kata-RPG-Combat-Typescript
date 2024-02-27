import { beforeEach, describe, expect, it } from "vitest";
import { Character } from "../classes/Character";

describe('Character class tests', () => {

    let batman: Character = new Character()
    let joker: Character = new Character()

    // beforeEach(() => {
    //     batman = new Character()
    // })

    it('la salud es de 1000 por defecto', () => {
        expect(batman.health).toBe(1000)
    })

    it('nivel 1 por defecto', () => {
        expect(batman.level).toBe(1)
    })

    it('está vivo por defecto', () => {
        expect(batman.isAlive).toBe(true)
    })

    it('ataque reduce la salud por 20 unidades', () => {
        // Dado
        let batman: Character = new Character()
        let joker: Character = new Character()
        // Cuando
        batman.attack(joker)
        // Entonces
        expect(joker.health).toBe(980)
    })

    it('cuando la salud del enemigo < el ataque, entonces el enemigo muere', () => {
        // Dado
        joker.health = 10
        // Cuando
        batman.attack(joker)
        // Entonces
        expect(joker.health).toBe(0)
        expect(joker.isAlive).toBe(false)
    })

    it('puede curar a otro personaje', () => {
        // Dado
        joker.health = 10
        // Cuando
        batman.heal(joker)
        // Entonces
        expect(joker.health).toBe(20)
    })

    it('no puede curar a un personaje muerto', () => {
        // Dado
        joker.health = 0
        joker.isAlive = false
        // Cuando
        batman.heal(joker)
        // Entonces
        expect(joker.health).toBe(0)
        expect(joker.isAlive).toBe(false)
    })

})