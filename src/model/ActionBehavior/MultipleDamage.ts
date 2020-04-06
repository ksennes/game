import {ActionBehavior} from "./ActionBehavior";
import {Character} from "../Character/Character";

export class MultipleDamage implements ActionBehavior {
    action(character: Character, target: Character, battleField?: Character[]): void {
        battleField?.filter(item => item.team !== character.team).map(target => {
            target.hp = target.hp - character.damage;
            if(target.hp < 0) target.dead();
        });
    }
}