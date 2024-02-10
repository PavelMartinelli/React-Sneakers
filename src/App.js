import React from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import items from "./items";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

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
        axios.get("https://65c24a59f7e6ea59682b15f1.mockapi.io/favorite")
            .then(res =>{
                setFavorites(res.data)
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
        if(favorites.find(FavObj => FavObj.id === obj.id)){
            axios.delete(`https://65c24a59f7e6ea59682b15f1.mockapi.io/favorite/${obj.id}`)
            setFavorites((prev) => (prev.filter(item => item.id !== obj.id)))
        }
        else {
            axios.post("https://65c24a59f7e6ea59682b15f1.mockapi.io/favorite", obj)
                .catch(() => console.log("Карточка добавлена в фавориты"))
            setFavorites(prevState => [...prevState, obj])
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
        </Routes>
    </div>
  );
}

export default App;
