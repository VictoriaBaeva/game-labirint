import {connect} from "react-redux";
import App from "./App";
import {addStartAC, changeFlagAC, changeTimerAC, countIncreaseAC, generateListOfMovesAC} from "./redux/app-reducer";

let mapStateToProps = (state) => {
    return {
        fieldSize: state.appPage.fieldSize,
        field: state.appPage.field,
        start: state.appPage.start,
        movesForGame: state.appPage.movesForGame,
        finish: state.appPage.finish,
        startFlag: state.appPage.startFlag,
        count: state.appPage.count,
        timer: state.appPage.timer
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addStart: () => {
            dispatch(addStartAC());
        },
        generateListOfMoves: () => {
            dispatch(generateListOfMovesAC());
        },
        changeFlag: () => {
            dispatch(changeFlagAC());
        },
        countIncrease: () => {
            dispatch(countIncreaseAC());
        },
        chnageTimer: () => {
            dispatch(changeTimerAC());
        }
    }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;


