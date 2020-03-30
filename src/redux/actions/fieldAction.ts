import {action} from "typesafe-actions";
import {BattleField} from "../../ts/BattleField/BattleField";
import {Character} from "../../ts/Character/Character";

export const startGame = () => {
    let battleField = new BattleField();
    battleField.setMoveOrder();
    return action('START_GAME', {
        characters: battleField.battleField,
        currentTeam: battleField.currentTeam,
        moveOrderFirstTeam: battleField.moveOrderFirstTeam,
        moveOrderSecondTeam: battleField.moveOrderSecondTeam});
};

export const motion = (character:Character) => {
    return action('MOTION');
};