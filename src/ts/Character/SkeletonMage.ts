import {Character} from "./Character";
import {DamageAction} from "../ActionBehavior/DamageAction";
import {MageTarget} from "../TargetBehavior/MageTarget";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";

export class SkeletonMage implements Character {
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
        this.damage = 20;
        this.hp = 50;
        this.initiative = 40;
        this.isActive = false;
        this.isParalyzed = false;
        this.isDefence = false;
        this.name = 'Skeleton mage';
        this.icon = '../../img/skeleton-mage-active.png';
        this.actionBehavior = new DamageAction();
        this.targetBehavior = new MageTarget();
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