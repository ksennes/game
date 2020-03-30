import {Character} from "../Character/Character";
import {Team} from "./Team";
import {generateTeam} from "./generateTeam";
import {generateCharacters} from "../Character/generateCharacters";

export class BattleField {
    battleField: Character[];
    currentTeam: Team;
    moveOrderFirstTeam: Character[];
    moveOrderSecondTeam: Character[];

    constructor() {
        this.battleField = generateCharacters();
        this.currentTeam = generateTeam();
        this.moveOrderFirstTeam = this.battleField.slice(0, this.battleField.length / 2).sort((a, b) => b.initiative - a.initiative);
        this.moveOrderSecondTeam = this.battleField.slice(this.battleField.length / 2).sort((a, b) => b.initiative - a.initiative);
    }

    setMoveOrder(): void {
        if (this.currentTeam === 0) {
            this.moveOrderFirstTeam[0].isActive = true;
        } else this.moveOrderSecondTeam[0].isActive = true;
    }

    restartRound(): void {
        this.setMoveOrder();
    }

    restartGame(): void {
        this.battleField = generateCharacters();
        this.currentTeam = generateTeam();
        this.moveOrderFirstTeam = this.battleField.slice(0, this.battleField.length / 2).sort((a, b) => b.initiative - a.initiative);
        this.moveOrderSecondTeam = this.battleField.slice(this.battleField.length / 2).sort((a, b) => b.initiative - a.initiative);
        this.setMoveOrder();
    }

    motion(character: Character): void {
        character.isActive = false;
        const index: number = this.battleField.indexOf(character);
        this.battleField[index + 1].isActive = true;
        this.currentTeam = this.currentTeam === 0 ? 1 : 0;
    }
}