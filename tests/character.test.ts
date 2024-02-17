import { beforeEach, describe, expect, it } from "vitest";
import { Character } from "../main/Character";

describe('Character', () => {
    let batman: Character;
    let joker: Character;

    beforeEach(() => {
        batman = new Character();
        joker = new Character();
    });

    it('la salud es de 1000 por defecto', () => {
        expect(batman.health).toBe(1000);
    });

    it('nivel 1 por defecto', () => {
        expect(batman.level).toBe(1);
    });

    it('está vivo por defecto', () => {
        expect(batman.isAlive).toBe(true);
    });

    it('ataque reduce la salud por 100 unidades', () => {
        batman.attack(joker);
        expect(joker.health).toBe(900);
    });

    // Aquí ya se puede introducir el concepto de Dado, Cuando, Entonces
    it('cuando el ataque > salud actual, la salud se hace 0 y el personaje muere', () => {
        joker.health = 50;
        batman.attack(joker);
        expect(joker.health).toBe(0);
        expect(joker.isAlive).toBe(false);
    });

    it('curar añade 100 unidades de salud', () => {
        joker.health = 500;
        batman.heal(joker);
        expect(joker.health).toBe(600);
    });

    it('no puede curar a un personaje muerto', () => {
        joker.health = 0;
        joker.isAlive = false;
        batman.heal(joker);
        expect(joker.health).toBe(0);
        expect(joker.isAlive).toBe(false);
    });

    it('curar no puede superar 1000 unidades de salud', () => {
        joker.health = 950;
        batman.heal(joker);
        expect(joker.health).toBe(1000);
    });

});