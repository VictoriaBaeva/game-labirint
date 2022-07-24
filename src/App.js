import style from './App.module.css';
import React from "react";
import Game from "./components/Game";

class App extends React.Component {

    startGame = () => {
        this.props.addStart();
        this.props.generateListOfMoves();
        this.props.changeFlag();
    };

    render() {

        return (
            <div className={style.container}>
                <div className={style.colored}>
                    <h1>Лабиринт</h1>
                </div>
                <div className={style.game}>
                    {!this.props.startFlag
                        ? <div>
                            <button className={style.button} onClick={this.startGame}>Начать игру</button>
                        </div>
                        : <Game start={this.props.start}
                                movesForGame={this.props.movesForGame}
                                finish={this.props.finish}
                                field={this.props.field}
                                changeFlag={this.props.changeFlag}
                                count={this.props.count}
                                countIncrease={this.props.countIncrease}
                                startGame={this.startGame}
                                timer={this.props.timer}
                        />
                    }
                </div>
            </div>

        )
    }
}


export default App;




