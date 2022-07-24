import style from './WhiteSquere.module.css';

const WhiteSquere = (props) => {
    return (
        <div>
            <div className={style.whiteSquere}>{props.x}{props.y}</div>
        </div>
    );
};

export default WhiteSquere;
