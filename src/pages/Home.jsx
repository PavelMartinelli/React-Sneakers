import items from "../items";
import Card from "../components/Card";
import React from "react";

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorites, onAddToCart}) {
    return (
        <div className="content p-40">
            <div className="d-flex mb-40 align-center justify-between">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кросовки"}</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg"/>
                    {searchValue && <img className="clear cu-p"
                                         src="/img/btn-remove.svg"
                                         onClick={() => setSearchValue("")}/>}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {
                    items.filter((item) => item.title.toLowerCase()
                        .includes(searchValue.toLowerCase()))
                        .map((obj, index) => (
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

export default Home