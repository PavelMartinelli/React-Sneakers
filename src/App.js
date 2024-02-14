import React from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import items from "./items";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
    //const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState("")

    React.useEffect(() =>{
        axios.get("https://65c24a59f7e6ea59682b15f1.mockapi.io/cart")
            .then(res =>{
                setCartItems(res.data)
            })
        //for(let i = 0; i <localStorage.length; i++){
            //setCartItems(prevState => ([...prevState, localStorage.getItem(i)]))
        //}
        axios.get("https://65c24a59f7e6ea59682b15f1.mockapi.io/favorite")
            .then(res =>{
                setFavorites(res.data)
            })
    }, [])

    const onAddToCart = (obj) => {
        if(obj.hasOwnProperty("imageUrl")) {
            localStorage.removeItem(obj.id)
            if (cartItems.find(CartObj => CartObj.id === obj.id)) {
                axios.delete(`https://65c24a59f7e6ea59682b15f1.mockapi.io/favorite/${obj.id}`)
                    .then(setCartItems((prev) => (prev.filter(item => item.id !== obj.id))))
                    .catch(err => console.log(`Ошибка: ${err.code}`))
            } else {
                axios.post("https://65c24a59f7e6ea59682b15f1.mockapi.io/cart", obj)
                localStorage.setItem(obj.id, JSON.stringify(obj))
                setCartItems(prev => [...prev, obj])
            }
        }


    };

    const onRemoveFromCart = (id) => {
        setCartItems((prev) => (prev.filter(item => item.id !== id)))
        axios.delete(`https://65c24a59f7e6ea59682b15f1.mockapi.io/cart/${id}`)
            .catch(err => console.log(`Ошибка: ${err}`))
        localStorage.removeItem(id)
    }

    const onAddToFavorits = (obj) => {
        if(obj.hasOwnProperty("imageUrl")) {
            if (favorites.find(FavObj => FavObj.id === obj.id)) {
                axios.delete(`https://65c24a59f7e6ea59682b15f1.mockapi.io/favorite/${obj.id}`)
                    .then(setFavorites((prev) => (prev.filter(item => item.id !== obj.id))))
                    .catch(err => console.log(`Ошибка: ${err.code}`))

            } else {
                axios.post("https://65c24a59f7e6ea59682b15f1.mockapi.io/favorite", obj)
                    .then(setFavorites(prevState => [...prevState, obj]))
                    .catch(() => console.log("Карточка добавлена в фавориты"))
            }
        }
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
        <Routes>
            <Route path="/"
                   element={<Home items={items}
                                  searchValue={searchValue}
                                  setSearchValue={setSearchValue}
                                  onChangeSearchInput={onChangeSearchInput}
                                  onAddToFavorites={onAddToFavorits}
                                  onAddToCart={onAddToCart}/>} />
            <Route path="/favorits"
                   element={<Favorites items={favorites}
                                       onAddToCart={onAddToCart}
                                       onAddToFavorits={onAddToFavorits}/>} />
            <Route path="/orders"
                   element={<Orders items={items}
                                    searchValue={searchValue}
                                    setSearchValue={setSearchValue}
                                    onChangeSearchInput={onChangeSearchInput}
                                    onAddToFavorites={onAddToFavorits}
                                    onAddToCart={onAddToCart}/>} />
        </Routes>
    </div>
  );
}

export default App;
