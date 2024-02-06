import CartCard from "./CartCard";
function Drawer({ onClose, items = [] }){
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex mb-30">Корзина
                    <img className="removeBtn cu-p"
                         src="/img/btn-remove.svg"
                         onClick={onClose}/>
                </h2>

                <div className="items">
                    {items.map((obj) => (
                    <CartCard title = {obj.title}
                              price= {obj.price}
                              imageUrl={obj.imageUrl}/>
                    ))}
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