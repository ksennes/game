import {Character} from "./Character";
import {TargetBehavior} from "../TargetBehavior/TargetBehavior";
import {ActionBehavior} from "../ActionBehavior/ActionBehavior";
import {HealAction} from "../ActionBehavior/HealAction";
import {HealerTarget} from "../TargetBehavior/HealerTarget";
import {Team} from "../BattleField/Team";

export class Monk implements Character {
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

    x: number ;
    y: number ;

    targetBehavior: TargetBehavior;
    actionBehavior: ActionBehavior;

    constructor() {
        this.damage = 40;
        this.hp = 70;
        this.initiative = 20;
        this.isParalyzed = false;
        this.isDefence = false;
        this.isDead = false;
        this.name = 'Monk';
        this.icon = '../../img/monk-active.png';
        this.deadIcon = '../../img/monk.png';
        this.actionBehavior = new HealAction();
        this.targetBehavior = new HealerTarget();
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