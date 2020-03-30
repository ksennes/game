import {Character} from "./Character";
import {DamageAction} from "../ActionBehavior/DamageAction";
import {MageTarget} from "../TargetBehavior/MageTarget";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";

export class Archimage implements Character {
    damage: number;
    hp: number;
    initiative: number;
    isActive: boolean;
    isParalyzed: boolean;
    isDefence: boolean;
    name: string;
    targetBehavior: TargetBehavior;
    actionBehavior: ActionBehavior;
    icon: string;
    x: number | null;
    y: number | null;

    constructor() {
        this.damage = 40;
        this.hp = 90;
        this.initiative = 40;
        this.isActive = false;
        this.isParalyzed = false;
        this.isDefence = false;
        this.name = 'Archimage';
        this.icon = '../../img/archimage-active.png';
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