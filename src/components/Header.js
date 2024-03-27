import React from "react";
import {Link} from "react-router-dom";
function Header({onOpenCart}){

    return (
        <header className="d-flex justify-between align-center">
            <Link to="/">
                <div className="d-flex align-center">
                    <img width={40} height={40} src={"/img/logo.svg"}/>
                    <div>
                        <h3 className={"text-uppercase"}>React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кросовок</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li className="mr-30 cu-p" onClick={onOpenCart}>
                    <img height={18} width={18} src={"/img/cart.svg"}/>
                    <span>Корзина</span>
                </li>
                <li className="mr-30 fav cu-p">
                    <Link to="/favorits">
                        <img className="mr-10" height={16} width={18} src={"/img/favorits.svg"}/>
                        <span>Закладки</span>
                    </Link>
                </li>
                <li className="cu-p">
                    <Link to="/orders">
                        <img height={18} width={18} src={"/img/user.svg"}/>
                        <span>Профиль</span>
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header