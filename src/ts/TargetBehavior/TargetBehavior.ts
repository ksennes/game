import {Character} from "../Character/Character";
import {BattleField} from "../BattleField/BattleField";

export interface TargetBehavior {
    getTarget(battleField: BattleField, character: Character): []
}