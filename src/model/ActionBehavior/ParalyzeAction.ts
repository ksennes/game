import {ActionBehavior} from "./ActionBehavior";
import {Character} from "../Character/Character";

export class ParalyzeAction implements ActionBehavior{
    action(character: Character, target: Character): void {
       target.isParalyzed = true;
    }
}