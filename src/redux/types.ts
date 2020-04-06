import {Character} from "../model/Character/Character";

export interface FieldState {
    characters: Character[];
    activeCharacter: Character;
    targets: Character[];
}