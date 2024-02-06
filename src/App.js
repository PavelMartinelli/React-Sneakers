import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() =>{
        fetch("https://65c24a59f7e6ea59682b15f1.mockapi.io/items")
            .then(res =>{
            return res.json()
        })
            .then(json => {
                setItems(json)
            })
    }, [])

    const onAddToCart = (obj) => {
        let bFlag = true;
        for(let i = 0; i < cartItems.length; i++) {
            if (cartItems[i][0] === obj[0] && cartItems[i][1] === obj[1] && cartItems[i][2] === obj[2]) {
                bFlag = false
                setCartItems(prev => prev.filter((c) => {
                    return c[0] !== obj[0] && c[1] !== obj[1] && c[2] !== obj[2]
                }))
                console.log(11111)
            }
        }
        if(bFlag)
            setCartItems(prev => [...prev, obj])
    };

  return (
    <div className="wrapper clear">

        {cartOpened && <Drawer onClose = {() => setCartOpened(false)}
                               items = {cartItems} />}

      <Header onOpenCart = {() => setCartOpened(true)}/>
      <div className="content p-40">
        <div  className="d-flex mb-40 align-center justify-between">
        <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
            {
                items.map(obj => (
                  <Card title = {obj.title}
                        price= {obj.price}
                        imageUrl={obj.imageUrl}
                        onFavorite = {() => console.log("Добавили в закладки")}
                        onPlus = {(prod) => onAddToCart(prod)}/>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default App;
