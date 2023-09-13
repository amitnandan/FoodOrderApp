
import CartContext from "./cart-context";


const CartProvider = props => {

    const addItemToCartHandler = item => {};

    const removeItemFromHandler = id => {};


    const cartContext = {
        item : [],
        totalAmount : 0 ,
        addItem : addItemToCartHandler ,
        removeItem : addItemToCartHandler
    }


    return
    <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;