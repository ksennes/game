import {Character} from "./Character";
import * as constants from "../constants";
import {CharacterFactory} from "./CharactersFactory";

export const generateCharacters = (): Character[] => {
    let charactersArray: Character[] = [];
    for (let y:number = 0; y < constants.ROWS; y++) {
        for (let x:number = 0; x < constants.COLS; x++) {
            const character = CharacterFactory.getCharacter(CharacterFactory.characters[Math.floor(Math.random() * 8)]);
            character.setCoordinates(x, y);
            charactersArray.push(character);
        }
    }
    return charactersArray;
};