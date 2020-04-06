import {BattleField} from "../BattleField/BattleField";
import {Character} from "../Character/Character";

export class Game {
    battleField: BattleField;

    constructor() {
        this.battleField = new BattleField();
    }

    startGame = (): BattleField => {
        this.battleField.restartGame();
        return this.battleField;
    };

    characterDefence = (character: Character): BattleField => {
        character.defence();
        this.updateFieldState(character);
        this.checkTeams();
        return this.battleField;
    };

    characterDoAction = (character: Character, target: Character): BattleField => {
        character.doAction(target, this.battleField.battleField);
        this.updateFieldState(character);
        this.checkTeams();
        return this.battleField;
    };

    updateFieldState(character: Character): void {
        this.battleField.changeActiveCharacter(character);
        this.battleField.updateField();
    }

    checkTeams(): void {
        if(!this.battleField.isTeamAlive(this.battleField.battleField.slice(0, this.battleField.battleField.length/2))) {
            alert('Purple team wins');
            this.startGame();
        }
        if(!this.battleField.isTeamAlive(this.battleField.battleField.slice(this.battleField.battleField.length/2))) {
            alert('Yellow team wins');
            this.startGame();
        }
    }
}