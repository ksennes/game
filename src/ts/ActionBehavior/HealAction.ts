import {ActionBehavior} from "./ActionBehavior";
import {BattleField} from "../BattleField/BattleField";
import {Character} from "../Character/Character";

export class HealAction implements ActionBehavior{
    action(battleField: BattleField, character: Character): BattleField {
        return battleField;
    }
}