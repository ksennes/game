import {TargetBehavior} from "./TargetBehavior";
import {BattleField} from "../BattleField/BattleField";
import {Character} from "../Character/Character";

export class ParalyzedTarget implements TargetBehavior{
    getTarget(battleField: BattleField, character: Character): [] {
        return [];
    }
}