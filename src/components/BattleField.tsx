import * as React from "react";
import Unit from "./Unit";
import {Character} from "../model/Character/Character";

let Loader = require('react-loaders').Loader;

interface Props {
    characters: Character[];
    activeCharacter: Character;
    targets: Character[]
}

const activeStyle = {
    border: '2px solid #008110',
    boxShadow: '0px 0px 10px 5px rgba(0,129,15,1)'
};

const targetStyle = {
    border: '5px solid #A60800',
    boxShadow: '0px 0px 10px 5px rgba(166,8,0,1)'
};

class BattleField extends React.Component<Props> {
    render() {
        const {characters, activeCharacter, targets} = this.props;
        if (characters.length === 0) return <Loader type='ball-pulse' color='black'/>;
        return (
            <div className='battle-field'>
                <div className='team'>
                    {
                        characters
                            .slice(0, this.props.characters.length / 2)
                            .map(item => <Unit character={item}
                                               style={item === activeCharacter ? activeStyle : targets.includes(item) ? targetStyle : {}}
                                               activeCharacter={activeCharacter}
                            />)
                    }
                </div>
                <hr/>
                <div className='team'>
                    {
                        characters
                            .slice(this.props.characters.length / 2)
                            .map(item => <Unit character={item}
                                               style={item === activeCharacter ? activeStyle : targets.includes(item)? targetStyle : {}}
                                               activeCharacter={activeCharacter}
                            />)
                    }
                </div>
            </div>
        )
    }
}


export default BattleField;