function Drawer(props){
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex mb-30">Корзина
                    <img className="removeBtn cu-p"
                         src="/img/btn-remove.svg"
                         onClick={props.onClose}/>
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <img width={70} height={70} src="/img/sneakers/1.jpg"/>
                        <div className="ml-20 mr-20">
                            <h5 className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</h5>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg"/>
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <img width={70} height={70} src="/img/sneakers/2.jpg"/>
                        <div className="ml-20 mr-20">
                            <h5 className="mb-5">Мужские Кроссовки Nike Air Max 270</h5>
                            <b>8 499 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg"/>
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 pуб. </b>
                        </li>
                    </ul>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}

export default Drawer