import React from "react";
function Card({id, title, price, imageUrl, onFavorite, onPlus, favorited = false}){
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () =>{
        onPlus({id, title, price, imageUrl});
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        if(favorited)
            onFavorite({id, title, price, imageUrl})
        else{
            onFavorite({id, title, price, imageUrl})
            setIsFavorite(!isFavorite)
        }
    }
    return (
        <div className="card mb-30">
            <div className="favorite" onClick={onFavorite}>
                <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
                     onClick={onClickFavorite}/>
            </div>
            <img height={112} width={133} src={imageUrl}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className={"d-flex flex-column"}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
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