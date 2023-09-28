function ItemCart(props){
    return(
        <div class="productInCart">
            <img src="https://picsum.photos/200/300" alt="" class="thumbProduct"/>
            <div>
                <h2>{props.itemName}</h2>
                <p>{props.itemPrice}</p>
            </div>
            <input type="checkbox" name="" id="" checked></input>
            <a href="">Remover do carrinho</a>
        </div>
    )
}
export default ItemCart