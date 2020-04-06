import {Character} from "./Character";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {MeleesTarget} from "../TargetBehavior/MeleesTarget";
import {DamageAction} from "../ActionBehavior/DamageAction";
import {Team} from "../BattleField/Team";

export class Centaur implements Character{
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
        this.name = 'Centaur';
        this.hp = 150;
        this.initiative = 50;
        this.damage = 50;
        this.icon = '../../img/centaur-active.png';
        this.deadIcon = '../../img/centaur.png';

        this.team = null;

        this.isParalyzed = false;
        this.isDefence = false;
        this.isDead = false;

        this.x = 0;
        this.y = 0;

        this.actionBehavior = new DamageAction();
        this.targetBehavior = new MeleesTarget();
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