function CartCard(props) {
    return (
        <div className="cartItem d-flex align-center mb-20">
            <img width={70} height={70} src={props.imageUrl}/>
            <div className="ml-20 mr-20">
                <h5 className="mb-5">{props.title}</h5>
                <b>{props.price} руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg"/>
        </div>
    )
}

export default CartCard