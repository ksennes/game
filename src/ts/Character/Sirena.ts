import {Character} from "./Character";
import {ParalyzeAction} from "../ActionBehavior/ParalyzeAction";
import {ParalyzedTarget} from "../TargetBehavior/ParalyzedTarget";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";

export class Sirena implements Character {
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
        this.damage = 0;
        this.hp = 80;
        this.initiative = 20;
        this.isActive = false;
        this.isParalyzed = false;
        this.isDefence = false;
        this.name = 'Sirena';
        this.icon = '../../img/sirena-active.png';
        this.actionBehavior = new ParalyzeAction();
        this.targetBehavior = new ParalyzedTarget();
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