import style from './StartSquere.module.css';

const StartSquare = (props) => {
    return (
        <div>
            <div className={style.item}>{props.x}{props.y}</div>
        </div>
    );
};

export default StartSquare;