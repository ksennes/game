import {TargetBehavior} from "./TargetBehavior";
import {Character} from "../Character/Character";
import {ROWS} from "../constants";

export class HealerTarget implements TargetBehavior {
    getTargets(battleField: Character[], character: Character): Character[] {
        const characterInTopTeam = character.y < ROWS/2;
        const characterInBottomTeam = character.y > ROWS/2-1;
        if(characterInTopTeam) return battleField.filter(item => item.y < ROWS/2 && !item.isDead);
        if(characterInBottomTeam) return battleField.filter(item => item.y > ROWS/2-1  && !item.isDead);
        return [];
    }
}