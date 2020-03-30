import {ActionType} from "typesafe-actions";
import {Team} from "../../ts/BattleField/Team";
import {FieldState} from "../types";
import * as fieldAction from '../actions/fieldAction';

export type FieldAction = ActionType<typeof fieldAction>;

const initialState: FieldState = {
    characters: [],
    currentTeam: Team.firstTeam,
    moveOrderFirstTeam: [],
    moveOrderSecondTeam: []
};

export const fieldReducer = (state: FieldState = initialState, action: FieldAction) => {
    switch (action.type) {
        case 'START_GAME':
            return {
                ...state,
                characters: action.payload.characters,
                currentTeam: action.payload.currentTeam,
                moveOrderFirstTeam: action.payload.moveOrderFirstTeam,
                moveOrderSecondTeam: action.payload.moveOrderSecondTeam
            };
        case 'MOTION':
            return state;
        default:
            return state;
    }
};



