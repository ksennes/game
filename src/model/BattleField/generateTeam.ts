import {Team} from "./Team";

export const generateTeam = (): Team => {
    return (Math.random() - 0.5) > 0 ? Team.firstTeam : Team.secondTeam;
};