import {applyMiddleware, createStore} from "redux";
import {rootReducer, RootState} from "./reducers/reducers";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {ActionTypes} from "./actions/fieldAction";

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<RootState, ActionTypes>));