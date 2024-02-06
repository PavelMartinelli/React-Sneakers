import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 12999,
        imageUrl: "/img/sneakers/1.jpg"
    },
    {
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 12999 ,
        imageUrl: "/img/sneakers/2.jpg"
    },
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 8499,
        imageUrl: "/img/sneakers/3.jpg"
    },
    {
        title: "Кроссовки Puma X Aka Boku Future Rider",
        price: 8499,
        imageUrl: "/img/sneakers/4.jpg"
    },
]
function App() {

    const [cartOpened, setCartOpened] = React.useState(false)

  return (
    <div className="wrapper clear">

        {cartOpened && <Drawer onClose = {() => setCartOpened(false)}/>}

      <Header onOpenCart = {() => setCartOpened(true)}/>
      <div className="content p-40">
        <div  className="d-flex mb-40 align-center justify-between">
        <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex">
            {
                arr.map(obj => (
                  <Card title = {obj.title}
                        price= {obj.price}
                        imageUrl={obj.imageUrl}
                        onFavorite = {() => console.log("Добавили в закладки")}
                        onPlus = {() => console.log("Нажали плюс")}/>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default App;
