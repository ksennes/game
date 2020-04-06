import {FieldState} from "../types";
import {ActionTypes} from "../actions/fieldAction";
import {CharacterFactory} from "../../model/Character/CharactersFactory";

const initialState: FieldState = {
    characters: [],
    activeCharacter: CharacterFactory.getCharacter('Skeleton'),
    targets: []
};

export const fieldReducer = (state: FieldState = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'CREATE_FIELD':
            return {
                ...state,
                characters: action.payload.characters,
                activeCharacter: action.payload.activeCharacter,
                targets: action.payload.targets
            };
        case 'UNIT_DEFENCE':
            return {
                ...state,
                characters: action.payload.characters,
                activeCharacter: action.payload.activeCharacter,
                targets: action.payload.targets
            };
        case 'UNIT_ACTION':
            return {
                ...state,
                characters: action.payload.characters,
                activeCharacter: action.payload.activeCharacter,
                targets: action.payload.targets
            };
        default:
            return state;
    }
};



