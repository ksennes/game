import React from "react";
import {connect} from "react-redux";
import {characterAction} from "../redux/actions/fieldAction";
import {Character} from "../model/Character/Character";

interface Props {
    character: Character;
    activeCharacter: Character;
    style: { border: string } | {};
    characterAction: (character: Character, target: Character)=> any;
}

class Unit extends React.Component<Props> {
    handleClick = () => {
        this.props.characterAction(this.props.activeCharacter, this.props.character);
    };

    render() {
        return (
            <div className='unit' style={this.props.style} onClick={this.handleClick}>
                <img src={this.props.character.isDead? this.props.character.deadIcon :this.props.character.icon} alt={this.props.character.name}/>
                <div className='unit-text'>
                    <h3>{this.props.character.name}</h3>
                    <span>HP: {this.props.character.hp}</span>
                </div>
            </div>
        )
    }
}

export default connect(undefined, {characterAction})(Unit);