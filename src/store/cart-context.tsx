import { createContext } from "react";

const CartContext = createContext({
    cartItems: 0,
    setCartItems (newValue: number) {
        this.cartItems = newValue
    }
})

export default CartContext