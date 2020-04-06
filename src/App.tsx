import React from 'react';
import './App.css';
import {connect} from "react-redux";
import RoundInfo from "./components/RoundInfo";
import BattleField from "./components/BattleField";
import {RootState} from "./redux/reducers/reducers";
import {startAction, defenceAction} from "./redux/actions/fieldAction";
import {Character} from "./model/Character/Character";

interface Props {
    characters: Character[];
    activeCharacter: Character;
    targets: Character[]
    startAction: () => any;
    defenceAction: (character: Character) => any;
}

class App extends React.Component<Props>{
    componentDidMount(): void {
        this.props.startAction();
    }

    handleClick = () => {
        this.props.defenceAction(this.props.activeCharacter);
    };

    render() {
        return (
            <div className="app">
                <RoundInfo characters={this.props.characters}
                           activeCharacter={this.props.activeCharacter}
                />

                <button onClick={this.handleClick}>Defence</button>

                <BattleField characters={this.props.characters}
                             activeCharacter={this.props.activeCharacter}
                             targets={this.props.targets}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    characters: state.fieldReducer.characters,
    activeCharacter: state.fieldReducer.activeCharacter,
    targets: state.fieldReducer.targets
});

export default connect(mapStateToProps, {startAction, defenceAction})(App);
