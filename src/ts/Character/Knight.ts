import {Character} from "./Character";
import {DamageAction} from "../ActionBehavior/DamageAction";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";
import {RangeTarget} from "../TargetBehavior/RangeTarget";

export class Knight implements Character {
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
        this.damage = 30;
        this.hp = 45;
        this.initiative = 60;
        this.isActive = false;
        this.isParalyzed = false;
        this.isDefence = false;
        this.name = 'Knight';
        this.icon = '../../img/knight-active.png';
        this.actionBehavior = new DamageAction();
        this.targetBehavior = new RangeTarget();
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