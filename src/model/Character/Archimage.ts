import {Character} from "./Character";
import {DamageAction} from "../ActionBehavior/DamageAction";
import {MageTarget} from "../TargetBehavior/MageTarget";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";
import {Team} from "../BattleField/Team";
import {MultipleDamage} from "../ActionBehavior/MultipleDamage";

export class Archimage implements Character {
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
        this.name = 'Archimage';
        this.hp = 90;
        this.initiative = 40;
        this.damage = 40;
        this.icon = '../../img/archimage-active.png';
        this.deadIcon = '../../img/archimage.png';

        this.team = null;

        this.isParalyzed = false;
        this.isDefence = false;
        this.isDead = false;

        this.x = 0;
        this.y = 0;

        this.actionBehavior = new DamageAction();
        this.targetBehavior = new MageTarget();
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
        battleField?.filter(item => item.team !== this.team && !item.isDead).map(item => this.actionBehavior.action(this, item));
    }

    setCoordinates(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    setTeam(team: Team): void {
        this.team = team;
    }
}