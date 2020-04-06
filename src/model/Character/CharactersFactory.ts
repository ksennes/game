import {Skeleton} from "./Skeleton";
import {Archimage} from "./Archimage";
import {Centaur} from "./Centaur";
import {Elf} from "./Elf";
import {Knight} from "./Knight";
import {Monk} from "./Monk";
import {SkeletonMage} from "./SkeletonMage";
import {Sirena} from "./Sirena";
import {Character} from "./Character";

export class CharacterFactory {
    static characters: Array<string> =  ['Skeleton', 'Knight', 'Centaur', 'Monk', 'Sirena', 'SkeletonMage', 'Elf', 'Archimage'];

    static getCharacter(name: string): Character {
        switch (name) {
            case 'Skeleton':
                return new Skeleton();
            case 'Knight':
                return new Knight();
            case 'Centaur':
                return new Centaur();
            case 'Monk':
                return new Monk();
            case 'Sirena':
                return new Sirena();
            case 'SkeletonMage':
                return new SkeletonMage();
            case 'Elf':
                return new Elf();
            case 'Archimage':
                return new Archimage();
            default:
                return new Skeleton();
        }
    }
}