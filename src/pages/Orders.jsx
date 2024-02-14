import Card from "../components/Card";
import React from "react";

function Orders({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorites, onAddToCart}) {
    return (
        <div className="content p-40">
            <div className="d-flex mb-40 align-center justify-between">
                <h1 className="mb-5">Мои покупки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    items.map((obj, index) => (
                            <Card id ={obj.id}
                                  title={obj.title}
                                  price={obj.price}
                                  imageUrl={obj.imageUrl}
                                  onFavorite={(prod) => onAddToFavorites(prod)}
                                  onPlus={(prod) => onAddToCart(prod)}
                                  key={index}/>
                        ))
                }
            </div>
        </div>
)
}

export default Orders