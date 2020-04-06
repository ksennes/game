import {TargetBehavior} from "./TargetBehavior";
import {Character} from "../Character/Character";
import {Team} from "../BattleField/Team";

export class MageTarget implements TargetBehavior {
    getTargets(battleField: Character[], character: Character): Character[] {
        if(character.team === Team.firstTeam) return battleField.filter(item => item.team === Team.secondTeam && !item.isDead);
        return battleField.filter(item => item.team === Team.firstTeam  && !item.isDead);
    }
}