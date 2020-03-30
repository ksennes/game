import React from "react";
import {Character} from "../ts/Character/Character";
import {Team} from "../ts/BattleField/Team";
let Loader = require('react-loaders').Loader;

interface Props {
    currentTeam: Team;
    moveOrderFirstTeam: Character[],
    moveOrderSecondTeam: Character[]
}

const RoundInfo = (props: Props) => {
    if (props.currentTeam === undefined) {
        return <Loader type='ball-pulse'/>
    }

    console.log(props);

    if(props.currentTeam===0) return (
        <div className='round-info'>
            <span style={{color: 'white'}}>Current team: yellow</span>
            <br/>
            {
                props.moveOrderFirstTeam.map(item => <div className='query'>{item.name}</div>)
            }
        </div>
    ); else return (
        <div className='round-info'>
            <span style={{color: 'white'}}>Current team: blue</span>
            <br/>
            {
                props.moveOrderSecondTeam.map(item => <div className='query'>{item.name}</div>)
            }
        </div>
    )
};

export default RoundInfo;