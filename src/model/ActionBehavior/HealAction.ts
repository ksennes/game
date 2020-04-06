import {ActionBehavior} from "./ActionBehavior";
import {Character} from "../Character/Character";

export class HealAction implements ActionBehavior{
    action(character: Character, target: Character): void {
        target.hp = target.hp + character.damage;
    }
}