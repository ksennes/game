import {Character} from "./Character";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";
import {HealAction} from "../ActionBehavior/HealAction";
import {HealerTarget} from "../TargetBehavior/HealerTarget";

export class Monk implements Character {
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

    targetBehavior: TargetBehavior;
    actionBehavior: ActionBehavior;

    constructor() {
        this.damage = 40;
        this.hp = 70;
        this.initiative = 20;
        this.isActive = false;
        this.isParalyzed = false;
        this.isDefence = false;
        this.name = 'Monk';
        this.icon = '../../img/monk-active.png';
        this.actionBehavior = new HealAction();
        this.targetBehavior = new HealerTarget();
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