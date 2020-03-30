import {Character} from "./Character";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";
import {DamageAction} from "../ActionBehavior/DamageAction";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {MeleesTarget} from "../TargetBehavior/MeleesTarget";

export class Skeleton implements Character {
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

    constructor() {
        this.name = 'Skeleton';
        this.damage = 25;
        this.hp = 100;
        this.initiative = 50;
        this.icon = '../../img/skeleton-active.png';
        this.isActive = false;
        this.isParalyzed = false;
        this.isDefence = false;
        this.actionBehavior = new DamageAction();
        this.targetBehavior = new MeleesTarget();
        this.x = null;
        this.y = null;
    }

    defence(): void {
        this.isDefence = true;
    }

    setCoordinates(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
}