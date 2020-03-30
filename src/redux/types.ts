import {Team} from "../ts/BattleField/Team";
import {Character} from "../ts/Character/Character";

export interface FieldState {
    characters: Character[];
    currentTeam: Team,
    moveOrderFirstTeam: Character[],
    moveOrderSecondTeam: Character[]
}