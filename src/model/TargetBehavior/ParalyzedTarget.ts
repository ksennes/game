import {TargetBehavior} from "./TargetBehavior";
import {Character} from "../Character/Character";
import {ROWS} from "../constants";

export class ParalyzedTarget implements TargetBehavior{
    getTargets(battleField: Character[], character: Character): Character[] {
        const characterInTopTeam = character.y < ROWS/2;
        const characterInBottomTeam = character.y > ROWS/2-1;
        if(characterInTopTeam) return battleField.filter(item => item.y > ROWS/2-1 && !item.isDead && !item.isParalyzed);
        if(characterInBottomTeam) return battleField.filter(item => item.y < ROWS/2   && !item.isDead && !item.isParalyzed);
        return [];
    }
}