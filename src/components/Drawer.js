import CartCard from "./CartCard";
import {Link} from "react-router-dom";
import React from "react";
function Drawer({ onClose, onRemoveFromCart, items = [] }){
    const [total, setTotal] = React.useState(0)
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex mb-30">Корзина
                    <img className="removeBtn cu-p"
                         src="/img/btn-remove.svg"
                         onClick={onClose}/>
                </h2>

                {
                    items.length === 0 ? (
                        <div className="CartEmpty d-flex justify-center align-center flex-column flex ">
                        <img className="mb-15" width={120} height={120} src="/img/CartEmpty.svg"/>
                        <h2>Карзина пуста</h2>
                        <p className="mb-10">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button onClick={onClose}>Вернутся назад</button>
                    </div>) :
                        (
                            <div>
                                <div className="items">
                                    {items.map((obj, index) => (
                                        <CartCard id={obj.id}
                                                  title={obj.title}
                                                  price={obj.price}
                                                  imageUrl={obj.imageUrl}
                                                  onRemoveFromCart={onRemoveFromCart}
                                                  key={index}/>
                                    ))}
                                </div>
                                <div className="cartTotalBlock">
                                    <ul>
                                        <li className="d-flex">
                                            <span>Итого:</span>
                                            <div></div>
                                            <b>121313руб. </b>
                                        </li>
                                        <li className="d-flex">
                                            <span>Налог 5%:</span>
                                            <div></div>
                                            <b>1074 pуб. </b>
                                        </li>
                                    </ul>
                                    <Link to="/orders">
                                        <button>Оформить заказ</button>
                                    </Link>
                                </div>
                            </div>
                        )}


            </div>
        </div>
    );
}

export default Drawer