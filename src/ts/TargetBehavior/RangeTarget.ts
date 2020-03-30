import {TargetBehavior} from "./TargetBehavior";
import {Character} from "../Character/Character";
import {BattleField} from "../BattleField/BattleField";

export class RangeTarget implements TargetBehavior {
    getTarget(battleField: BattleField, character: Character): [] {
        return [];
    }
}