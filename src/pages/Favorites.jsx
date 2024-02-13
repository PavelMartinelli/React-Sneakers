
import Card from "../components/Card";
import React from "react";

function Favorites({items, onAddToCart, onAddToFavorits}) {
    return (
        <div className="content p-40">
            <div className="d-flex mb-40 align-center justify-between">
                <h1>{items.length !==0  ? `Мои закладки: Всего ${items.length}` : "Мои закладки" }</h1>
            </div>
            <div className="d-flex flex-wrap">
                { items.length !==0  &&
                    items.map((obj, index) => (
                            <Card id ={obj.id}
                                  title={obj.title}
                                  price={obj.price}
                                  imageUrl={obj.imageUrl}
                                  onPlus={(prod) => onAddToCart(prod)}
                                  onFavorite={(prod) => onAddToFavorits(prod)}
                                  favorited={true}
                                  key={index}/>
                        ))
                }
            </div>
        </div>
)
}

export default Favorites