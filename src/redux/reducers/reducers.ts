import {combineReducers} from "redux";
import {StateType} from "typesafe-actions";
import {fieldReducer} from "./fieldReducer";

export const rootReducer = combineReducers({
    fieldReducer
});

export type RootState = StateType<typeof rootReducer>;