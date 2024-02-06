function CartCard({title, price, imageUrl} ) {
    return (
        <div className="cartItem d-flex align-center mb-20">
            <img width={70} height={70} src={imageUrl}/>
            <div className="ml-20 mr-20">
                <h5 className="mb-5">{title}</h5>
                <b>{price} руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg"/>
        </div>
    )
}

export default CartCard