import React from "react";
function Card({title, price, imageUrl, onFavorite, onPlus}){
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () =>{
        onPlus({title, price, imageUrl});
        setIsAdded(!isAdded);
    }
    return (
        <div className="card mb-30">
            <div className="favorite" onClick={onFavorite}>
                <img src="/img/heart-unliked.svg"/>
            </div>
            <img height={112} width={133} src={imageUrl}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className={"d-flex flex-column"}>
                    <span>Цена:</span>
                    <b>{price}ч руб.</b>
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