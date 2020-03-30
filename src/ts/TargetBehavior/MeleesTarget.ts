import {TargetBehavior} from "./TargetBehavior";
import {BattleField} from "../BattleField/BattleField";
import {Character} from "../Character/Character";

export class MeleesTarget implements TargetBehavior{
    getTarget(battleField: BattleField, character: Character): [] {
        return [];
    }
}