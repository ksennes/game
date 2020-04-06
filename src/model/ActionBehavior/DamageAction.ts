import {ActionBehavior} from "./ActionBehavior";
import {Character} from "../Character/Character";

export class DamageAction implements ActionBehavior{
    action(character: Character, target: Character): void {
        if(target.isDefence) target.hp = target.hp - Math.floor(character.damage/2);
        else target.hp = target.hp - character.damage;
        if(target.hp <= 0) target.dead();
    }
}