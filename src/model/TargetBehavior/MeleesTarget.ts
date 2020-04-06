import {TargetBehavior} from "./TargetBehavior";
import {Character} from "../Character/Character";
import {COLS, ROWS} from "../constants";

export class MeleesTarget implements TargetBehavior {
    getTargets(battleField: Character[], character: Character): Character[] {
        const characterInAvantGardeTop = character.y === ROWS / 2 - 1;
        const characterInAvantGardeBottom = character.y === ROWS / 2;

        const characterInRearGardTop = character.y < ROWS / 2 - 1;
        const characterInRearGardBottom = character.y > ROWS / 2;

        const characterInLeft = character.x === 0;
        const characterInCenter = character.x > 0 && character.x < COLS - 1;
        const characterInRight = character.x === COLS - 1;

        if (characterInAvantGardeTop) {
            if (characterInLeft) {
                let targets = this.checkAvantGardeRight(battleField, character, character.y + 1);
                if (targets.length !== 0) return targets;
                targets = this.checkTopLines(battleField, character, character.y + 2);
                if (targets.length !== 0) return targets;
            }

            if (characterInRight) {
                let targets = this.checkAvantGardeLeft(battleField, character, character.y + 1);
                if (targets.length !== 0) return targets;
                targets = this.checkTopLines(battleField, character, character.y + 2);
                if (targets.length !== 0) return targets;
            }

            if (characterInCenter) {
                let targets = this.checkTopLines(battleField, character, character.y + 1);
                if (targets.length !== 0) return targets;
            }
        }

        if (characterInAvantGardeBottom) {
            if (characterInLeft) {
                let targets = this.checkAvantGardeRight(battleField, character, character.y - 1);
                if (targets.length !== 0) return targets;
                targets = this.checkBottomLines(battleField, character, character.y - 2);
                if (targets.length !== 0) return targets;
            }

            if (characterInRight) {
                let targets = this.checkAvantGardeLeft(battleField, character, character.y - 1);
                if (targets.length !== 0) return targets;
                targets = this.checkBottomLines(battleField, character, character.y - 2);
                if (targets.length !== 0) return targets;
            }

            if (characterInCenter) {
                let targets = this.checkBottomLines(battleField, character, character.y - 1);
                if (targets.length !== 0) return targets;
            }
        }

        if (characterInRearGardTop) {
            let characters: Character[] = this.checkTopTeam(battleField, character);
            if (characters.length !== 0) return [];
            let targets = this.checkTopLines(battleField, character, character.y + 1);
            if (targets.length !== 0) return targets;
        }

        if (characterInRearGardBottom) {
            let characters: Character[] = this.checkBottomTeam(battleField, character);
            if(characters.length !==0) return [];
            let targets = this.checkBottomLines(battleField, character, character.y - 1);
            if (targets.length !== 0) return targets;
        }
        return [];
    }

    private checkAvantGardeRight = (battleField: Character[], character: Character, y: number) => {
        let targets = battleField.filter(item => item.y === y && item.x < COLS - 1 && !item.isDead);
        if (targets.length !== 0) return targets;
        if (targets.length === 0) {
            targets = battleField.filter(item => item.y + 1 === y && item.x === COLS - 1 && !item.isDead);
            if (targets.length !== 0) return targets;
        }
        return [];
    };

    private checkAvantGardeLeft = (battleField: Character[], character: Character, y: number) => {
        let targets = battleField.filter(item => (item.y === y && item.x > 0 && !item.isDead));
        if (targets.length !== 0) return targets;
        if (targets.length === 0) {
            targets = battleField.filter(item => item.y - 1 === y && item.x === 0 && !item.isDead);
            if (targets.length !== 0) return targets;
        }
        return [];
    };

    private checkTopLines = (battleField: Character[], character: Character, from: number) => {
        for (let y = from; y < ROWS; y++) {
            let targets = battleField.filter(item => item.y === y && !item.isDead);
            if (targets.length !== 0) return targets;
        }
        return [];
    };

    private checkBottomLines = (battleField: Character[], character: Character, from: number) => {
        for (let y = from; y >= 0; y--) {
            let targets = battleField.filter(item => item.y === y && !item.isDead);
            if (targets.length !== 0) return targets;
        }
        return [];
    };

    private checkTopTeam = (battleField: Character[], character: Character) => {
        let characters: Character[] = [];
        for (let y = character.y + 1; y < ROWS / 2; y++) {
            characters = battleField.filter(item => item.y === y && !item.isDead);
            if (characters.length !== 0) return characters;
        }
        return [];
    };

    private checkBottomTeam = (battleField: Character[], character: Character) => {
        let characters: Character[] = [];
        for (let y = character.y - 1; y > ROWS / 2 - 1; y--) {
            characters = battleField.filter(item => item.y === y && !item.isDead);
            if (characters.length !== 0) return characters;
        }
        return [];
    };
}