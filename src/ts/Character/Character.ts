import {ActionBehavior} from "../ActionBehavior/ActionBehavior";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";

export interface Character {
    name: string;
    hp: number;
    initiative: number;
    damage: number;
    icon: string;

    isActive: boolean;
    isParalyzed: boolean;
    isDefence: boolean;

    x: number | null;
    y: number | null;

    actionBehavior: ActionBehavior;
    targetBehavior: TargetBehavior;
    defence(): void

    setCoordinates(x: number, y: number): void
}