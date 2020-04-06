import {Character} from "../Character/Character";

export interface ActionBehavior {
    action(character: Character, target: Character, battleField?: Character[]): void
}