import * as React from "react";
import Unit from "./Unit";
import {Character} from "../ts/Character/Character";
let Loader = require('react-loaders').Loader;

interface Props {
    characters: Character[];
}

class BattleField extends React.Component<Props> {
    render() {
        console.log(this.props);
        if(this.props.characters.length===0) return <Loader type='ball-pulse' color='black'/>;

        return (
            <div className='battle-field'>
                <div className='team'>
                    {
                        this.props.characters.slice(0, this.props.characters.length/2).map(item => <Unit name={item.name}
                                                                                                         hp={item.hp}
                                                                                                         icon={item.icon}
                                                                                                         style={item.isActive? {border: '2px solid #008110'}: {}}
                        />)
                    }
                </div>
                <hr/>
                <div className='team'>
                    {
                        this.props.characters.slice(this.props.characters.length/2).map(item => <Unit name={item.name}
                                                                                                      hp={item.hp}
                                                                                                      icon={item.icon}
                                                                                                      style={item.isActive? {border: '2px solid #008110'}: {}}
                        />)
                    }
                </div>
            </div>
        )
    }
}

export default BattleField;