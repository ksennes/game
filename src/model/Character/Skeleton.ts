import {Character} from "./Character";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";
import {DamageAction} from "../ActionBehavior/DamageAction";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {MeleesTarget} from "../TargetBehavior/MeleesTarget";
import {Team} from "../BattleField/Team";

export class Skeleton implements Character {
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

    constructor() {
        this.name = 'Skeleton';
        this.damage = 25;
        this.hp = 100;
        this.initiative = 50;
        this.icon = '../../img/skeleton-active.png';
        this.deadIcon = '../../img/skeleton.png';
        this.isParalyzed = false;
        this.isDefence = false;
        this.isDead = false;
        this.actionBehavior = new DamageAction();
        this.targetBehavior = new MeleesTarget();
        this.x = 0;
        this.y = 0;
        this.team = null;
    }

    dead(): void {
        this.isDead = true;
        this.hp = 0;
    }

    defence(): void {
        this.isDefence = true;
    }

    performGetTarget(battleField: Character[], character: Character): Character[] {
        return this.targetBehavior.getTargets(battleField, character);
    }

    doAction(character: Character, battleField?: Character[]): void {
        this.actionBehavior.action(this, character);
    }

    setCoordinates(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    setTeam(team: Team): void {
        this.team = team;
    }
}