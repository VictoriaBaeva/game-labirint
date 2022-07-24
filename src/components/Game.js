import style from "./Game.module.css";
import React, {useState, useEffect} from "react";
import StartSquare from "./StartSquere";
import WhiteSquere from "./WhiteSquere";
import Modal from 'react-modal';


const Game = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [resultOfGame, setResult] = useState('');
    const [counter, setCounter] = useState(props.timer);

    useEffect(
        () => {
            const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => {
            clearInterval(timer);
        }
    }, [counter]);

    let drawStart = (x, y) => {
        if (props.start.x === x && props.start.y === y) {
            return <StartSquare x={x} y={y}/>
        } else {
            return <WhiteSquere x={x} y={y}/>
        }
    };

    let arrows = (movesForGame) => {
        if (movesForGame === 'up') {
            return <img src='./up.png' alt='up'/>;
        } else if (movesForGame === 'down') {
            return <img src='./down.png' alt='down'/>;
        } else if (movesForGame === 'right') {
            return <img src='./right.png' alt='right'/>;
        } else if (movesForGame === 'left') {
            return <img src='./left.png' alt='left'/>;
        }
    };

    let openModal = () => {
        setShowModal(true);
        setCounter(60);
    };

    let gameExit = () => {
        props.changeFlag();
    };

    let startNewGame = () => {
        props.changeFlag();
    };

    let checkResult = (e) => {
        let finishOfGame = Object.values(props.finish).join('');
        let userClickXY = e.target.innerHTML;
        if (finishOfGame === userClickXY) {
            setResult('Победа!');
            e.target.style.backgroundColor = '#4FD1C5';
            setTimeout(openModal, 800);
        } else {
            if (props.count < 5) {
                e.target.style.backgroundColor = 'red';
                setTimeout(() => {
                    e.target.style.backgroundColor = 'white';
                }, 250);
                setTimeout(props.countIncrease, 500);
            } else {
                setResult('Упс! Попробуй еще раз');
                openModal();
            }
        }
    };

    return (
        <div className={style.game_container}>
            {counter > 0
            ? <div>
                    <div onClick={checkResult} className={style.game_field}>{props.field.map((value, i) => (<div>{
                        props.field.map((item, k) => (<div>{drawStart(i, k)}</div>))}</div>))}</div>

                    <div className={style.text}>
                        <span>Попытка: {props.count}</span>
                        <span><div>Время: {counter}</div></span>
                    </div>

                    <div className={style.image_field}>
                        <div className={style.image}>{props.movesForGame.map(m => arrows(m))}</div>
                    </div>

                    <button className={style.buttonExit} onClick={gameExit}>Выйти</button>
                    <div>
                        <Modal className={style.modalWindow}
                               ariaHideApp={false}
                               isOpen={showModal}
                               onRequestClose={() => setShowModal(false)}
                        >
                            <div className={style.modalContainer}>
                                <div className={style.modalText}>{resultOfGame}</div>
                                <div className={style.modalFooter}>
                                    <button className={style.modalButton} onClick={startNewGame}>Новая игра</button>
                                    <button className={style.modalButton} onClick={gameExit}>Выйти</button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
                : <div className={style.modalContainer}>
                    <div className={style.modalText}>Упс! Время вышло..</div>
                    <div className={style.modalFooter}>
                        <button className={style.modalButton} onClick={startNewGame}>Новая игра</button>
                        <button className={style.modalButton} onClick={gameExit}>Выйти</button>
                    </div>
                </div>
            }

        </div>
    );
};

export default Game;