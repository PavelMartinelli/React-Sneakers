function Header(props){
    return (
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center">
                <img width={40} height={40} src={"/img/logo.svg"}/>
                <div>
                    <h3 className={"text-uppercase"}>React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кросовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30 cu-p" onClick={props.onOpenCart}>
                    <img height={18} width={18} src={"/img/cart.svg"}/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img height={18} width={18} src={"/img/user.svg"}/>
                </li>
            </ul>
        </header>
    );
}

export default Header