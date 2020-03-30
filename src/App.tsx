import React from 'react';
import './App.css';
import {connect} from "react-redux";
import RoundInfo from "./components/RoundInfo";
import BattleField from "./components/BattleField";
import {RootState} from "./redux/reducers/reducers";
import {startGame, motion} from "./redux/actions/fieldAction";
import {Team} from "./ts/BattleField/Team";
import {Character} from "./ts/Character/Character";

interface Props {
    characters: Character[];
    currentTeam: Team;
    startGame: () => any;
    moveOrderFirstTeam: Character[],
    moveOrderSecondTeam: Character[]
}

class App extends React.Component<Props>{
    componentDidMount(): void {
        console.log('lol123');
        this.props.startGame();
    }

    render() {
        return (
            <div className="app">
                <RoundInfo moveOrderFirstTeam={this.props.moveOrderFirstTeam}
                           moveOrderSecondTeam={this.props.moveOrderSecondTeam}
                           currentTeam={this.props.currentTeam}
                />
                <BattleField characters={this.props.characters} />
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    characters: state.fieldReducer.characters,
    currentTeam: state.fieldReducer.currentTeam,
    moveOrderFirstTeam: state.fieldReducer.moveOrderFirstTeam,
    moveOrderSecondTeam: state.fieldReducer.moveOrderSecondTeam
});

export default connect(mapStateToProps, {startGame, motion})(App);
