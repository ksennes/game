import {Character} from "../../model/Character/Character";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers/reducers";
import {game} from "../../model/main";

type GameActionType = {
    type: string
    payload: {
        characters: Character[],
        activeCharacter: Character,
        targets: Character[]
    },
}

export type ActionTypes = GameActionType;
export type ThunkType = ThunkAction<Promise<void>, RootState, undefined, ActionTypes>
export type DispatchType = Dispatch<ActionTypes>

export const startAction = ():ThunkType => {
    return async (dispatch:DispatchType) => {
        let data = await game.startGame();
        dispatch({
            type: 'CREATE_FIELD',
            payload: {
                characters: data.battleField,
                activeCharacter: data.activeCharacter,
                targets: data.targets
            }
        })
    }
};

export const defenceAction = (character:Character): ThunkType => {
    return async (dispatch:DispatchType) => {
        let data = await game.characterDefence(character);
        dispatch({
            type: 'UNIT_DEFENCE',
            payload: {
                characters: data.battleField,
                activeCharacter: data.activeCharacter,
                targets: data.targets
            }
        })
    }
};

export const characterAction = (character: Character, target: Character): ThunkType => {
  return async (dispatch: DispatchType) => {
      let data = await game.characterDoAction(character, target);
      dispatch({
          type: 'UNIT_ACTION',
          payload: {
              characters: data.battleField,
              activeCharacter: data.activeCharacter,
              targets: data.targets
          }
      })
  }
};