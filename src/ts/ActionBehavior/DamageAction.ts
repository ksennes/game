import {ActionBehavior} from "./ActionBehavior";
import {BattleField} from "../BattleField/BattleField";
import {Character} from "../Character/Character";

export class DamageAction implements ActionBehavior{
    action(battleField: BattleField, character: Character): BattleField {
        return battleField;
    }
}