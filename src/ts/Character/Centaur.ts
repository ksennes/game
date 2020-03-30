import {Character} from "./Character";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {MeleesTarget} from "../TargetBehavior/MeleesTarget";
import {DamageAction} from "../ActionBehavior/DamageAction";

export class Centaur implements Character{
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
        this.damage = 50;
        this.hp = 150;
        this.initiative = 50;
        this.isActive = false;
        this.isParalyzed = false;
        this.isDefence = false;
        this.name = 'Centaur';
        this.icon = '../../img/centaur-active.png';
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