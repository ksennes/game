import {Character} from "../Character/Character";
import {generateCharacters} from "../Character/generateCharacters";

export class BattleField {
    battleField: Character[];
    moveQuery: Character[];
    activeCharacter: Character;
    targets: Character[];

    constructor() {
        this.battleField = [];
        this.moveQuery = [];
        this.activeCharacter = this.moveQuery[0];
        this.targets = [];
    }

    changeActiveCharacter(character: Character): void {
        let index: number = this.moveQuery.indexOf(character);

        while (true) {
            if (index >= this.moveQuery.length-1) {
                this.restartRound();
                index = -1;
            }

            if(this.moveQuery[index + 1].isDead || this.moveQuery[index + 1].isParalyzed) {
                this.moveQuery[index + 1].isParalyzed = false;
                index++;
            } else {
                this.activeCharacter = this.moveQuery[index + 1];
                break;
            }
        }
    }

    restartRound(): void {
        this.battleField.map(item => item.isDefence = false);
    }

    restartGame(): void {
        this.battleField = generateCharacters();
        this.moveQuery = this.battleField.slice(0).sort((a, b) => b.initiative - a.initiative);
        this.activeCharacter = this.moveQuery[0];
        this.targets = this.activeCharacter.performGetTarget(this.battleField, this.activeCharacter);
    }

    updateField(): void {
        this.targets = this.activeCharacter.performGetTarget(this.battleField, this.activeCharacter);
    }

    isTeamAlive(battleField: Character[]): boolean {
        return battleField.filter(item => !item.isDead).length !== 0;
    }
}