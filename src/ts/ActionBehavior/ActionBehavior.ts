import {BattleField} from "../BattleField/BattleField";
import {Character} from "../Character/Character";

export interface ActionBehavior {
    action(battleField: BattleField, character: Character): BattleField
}