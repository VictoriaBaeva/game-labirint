
const ADD_START = 'ADD-START';
const GENERATE_LIST_OF_MOVES = 'GENERATE-LIST-OF-MOVES';
const CHANGE_FLAG = 'CHANGE-FLAG';
const COUNT_INCREASE = 'COUNT-INCREASE';
const CHANGE_TIMER = 'CHANGE-TIMER';


let initialState = {
    fieldSize:3,
    field: [],
    start: {
        x: null,
        y: null
    },
    direction: {
        right: {x:1, y: 0},
        left: {x: -1, y: 0},
        up: {x: 0, y: -1},
        down: {x: 0, y: 1}
    },
    finish: {
        x: null,
        y: null
    },
    movesForGame: [],
    startFlag: false,
    count: 1,
    timer: 8
};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_START:
            return {
                ...state,
                field: Array.from({length: state.fieldSize}, () => Array(state.fieldSize).fill(null)),
               start: {
                    x: Math.floor(Math.random()*state.fieldSize),
                    y: Math.floor(Math.random()*state.fieldSize)
               }
            };
        case GENERATE_LIST_OF_MOVES:
            let startMoving = {x: state.start.x, y: state.start.y};
            let mass = [];

            while (mass.length < 10) {

                let keys = Object.keys(state.direction);
                let randname = keys[ keys.length * Math.random() << 0];

                let tempX = startMoving.x+state.direction[randname].x;
                let tempY = startMoving.y+state.direction[randname].y;
                if (tempX >= state.fieldSize || tempY >= state.fieldSize) {
                    continue;
                } else if (tempX < 0 || tempY < 0) {
                    continue;
                }

                startMoving.x = tempX;
                startMoving.y = tempY;

                mass.push(randname);
            }
            return {
                ...state,
                movesForGame: [...mass],
                finish: {
                    x:startMoving.x,
                    y:startMoving.y
                }
            };
        case CHANGE_FLAG:
            return {
                ...state,
                startFlag: !state.startFlag,
                count: 1
            };
        case COUNT_INCREASE:
            return {
                ...state,
                count: state.count+1
            };
        case CHANGE_TIMER:
            return {
                ...state,
                timer: state.timer-1
            };
        default:
            return {
                ...state
            };
    }
};


export const addStartAC = () => ({type: ADD_START});
export const generateListOfMovesAC = () => ({type: GENERATE_LIST_OF_MOVES});
export const changeFlagAC = () => ({type: CHANGE_FLAG});
export const countIncreaseAC = () => ({type: COUNT_INCREASE});
export const changeTimerAC = () => ({type: CHANGE_TIMER});



export default appReducer;