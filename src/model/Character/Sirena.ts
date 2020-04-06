import {Character} from "./Character";
import {ParalyzeAction} from "../ActionBehavior/ParalyzeAction";
import {ParalyzedTarget} from "../TargetBehavior/ParalyzedTarget";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";
import {Team} from "../BattleField/Team";

export class Sirena implements Character {
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
        this.damage = 0;
        this.hp = 80;
        this.initiative = 20;
        this.isParalyzed = false;
        this.isDefence = false;
        this.isDead = false;
        this.name = 'Sirena';
        this.icon = '../../img/sirena-active.png';
        this.deadIcon = '../../img/sirena.png';
        this.actionBehavior = new ParalyzeAction();
        this.targetBehavior = new ParalyzedTarget();
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