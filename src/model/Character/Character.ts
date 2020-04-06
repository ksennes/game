import {ActionBehavior} from "../ActionBehavior/ActionBehavior";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {Team} from "../BattleField/Team";

export interface Character {
    name: string;
    hp: number;
    initiative: number;
    damage: number;
    icon: string;
    deadIcon: string;

    team: Team | null;

    isParalyzed: boolean;
    isDefence: boolean;
    isDead: boolean;

    x: number;
    y: number;

    actionBehavior: ActionBehavior;
    targetBehavior: TargetBehavior;

    dead(): void
    defence(): void
    performGetTarget(battleField: Character[], character: Character): Character[]
    doAction(character: Character, battleField?: Character[]): void

    setCoordinates(x: number, y: number): void
    setTeam(team: Team): void
}