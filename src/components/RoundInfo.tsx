import React from "react";
import {Character} from "../model/Character/Character";
import {Team} from "../model/BattleField/Team";

let Loader = require('react-loaders').Loader;

interface Props {
    characters: Character[];
    activeCharacter: Character;
}

const RoundInfo = (props: Props) => {
    const{characters, activeCharacter} = props;

    if (characters.length === 0) {
        return <Loader type='ball-pulse'/>
    }

    const style = {
        border: '2px solid #008110',
        boxShadow: '0px 0px 10px 5px rgba(0,129,15,1)'
    };

   return (
        <div className='round-info'>
            <br/>
            {
                characters
                    .slice()
                    .sort((a,b) => b.initiative - a.initiative)
                    .map(item => {
                        if(item.team === Team.firstTeam) return <div className='query yellow-team' style={item===activeCharacter? style : undefined}>{item.name}</div>;
                        if(item.team === Team.secondTeam) return <div className='query purple-team' style={item===activeCharacter? style : undefined}>{item.name}</div>;
                    })
            }
        </div>
    );
};

export default RoundInfo;