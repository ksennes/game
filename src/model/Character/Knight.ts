import {Character} from "./Character";
import {DamageAction} from "../ActionBehavior/DamageAction";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";
import {RangeTarget} from "../TargetBehavior/RangeTarget";
import {Team} from "../BattleField/Team";

export class Knight implements Character {
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
        this.damage = 30;
        this.hp = 45;
        this.initiative = 60;
        this.isParalyzed = false;
        this.isDefence = false;
        this.isDead = false;
        this.name = 'Knight';
        this.icon = '../../img/knight-active.png';
        this.deadIcon = '../../img/knight.png';
        this.actionBehavior = new DamageAction();
        this.targetBehavior = new RangeTarget();
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