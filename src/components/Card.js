import React from "react";
function Card(props){
    const [isAdded, setIsAdded] = React.useState(false);

    React.useEffect(() => {
        console.log("Изменилась переменная!")
    }, [isAdded])
    const onClickPlus = () =>{
        setIsAdded(!isAdded);
    }
    return (
        <div className="card">
            <div className="favorite" onClick={props.onFavorite}>
                <img src="/img/heart-unliked.svg"/>
            </div>
            <img height={112} width={133} src={props.imageUrl}/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className={"d-flex flex-column"}>
                    <span>Цена:</span>
                    <b>{props.price}ч руб.</b>
                </div>
                <img className="button"
                     onClick={onClickPlus}
                     width={11}
                     height={11}
                     src={isAdded ? "/img/btn-checked.svg": "/img/plus.svg" }/>
            </div>
        </div>
    );
}

export default Card;