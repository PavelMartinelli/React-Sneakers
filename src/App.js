import React from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import items from "./items";

function App() {
    //const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [favorits, setFavorits] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState("")

    React.useEffect(() =>{
        axios.get("https://65c24a59f7e6ea59682b15f1.mockapi.io/cart")
            .then(res =>{
                setCartItems(res.data)
            })
    }, [])

    const onAddToCart = (obj) => {
        axios.post("https://65c24a59f7e6ea59682b15f1.mockapi.io/cart", obj)
        setCartItems(prev => [...prev, obj])
    };

    const onRemoveFromCart = (id) => {
        axios.delete(`https://65c24a59f7e6ea59682b15f1.mockapi.io/cart/${id}`)
        setCartItems((prev) => (prev.filter(item => item.id !== id)))
    }

    const onAddToFavorits = (obj) => {
        axios.post("https://65c24a59f7e6ea59682b15f1.mockapi.io/favorite", obj)
            .catch(() => console.log("Карточка добавлена в фавориты"))
        setFavorits( prevState => [...prevState, obj])
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }
  return (
    <div className="wrapper clear">

        {cartOpened && <Drawer onClose = {() => setCartOpened(false)}
                               items = {cartItems}
                               onRemoveFromCart = {onRemoveFromCart}/>}
      <Header onOpenCart = {() => setCartOpened(true)}/>
        <div className="content p-40">
        <div  className="d-flex mb-40 align-center justify-between">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кросовки"}</h1>
            <div className="search-block d-flex">
                <img src="/img/search.svg"/>
                {searchValue && <img className="clear cu-p"
                     src="/img/btn-remove.svg"
                     onClick={() => setSearchValue("")}/> }
                <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
            </div>
        </div>
          <div className="d-flex flex-wrap">
              {
                  items.filter((item) => item.title.toLowerCase()
                      .includes(searchValue.toLowerCase()))
                      .map((obj, index) => (
                      <Card title = {obj.title}
                        price= {obj.price}
                        imageUrl={obj.imageUrl}
                        onFavorite = {(prod) => onAddToFavorits(prod)}
                        onPlus = {(prod) => onAddToCart(prod)}
                        key = {index}/>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default App;
