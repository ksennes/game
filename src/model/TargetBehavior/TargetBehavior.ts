import {Character} from "../Character/Character";

export interface TargetBehavior {
    getTargets(battleField: Character[], character: Character): Character[]
}