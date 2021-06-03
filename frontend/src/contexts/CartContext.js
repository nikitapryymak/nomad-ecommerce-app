import { createContext, useReducer } from "react";
import CartReducer, { sumItems } from "./CartReducer";

export const CartContext = createContext();

const cartFromStorage = JSON.parse(localStorage.getItem('cart')) || []; 

export default function CartProvider({ children }) {

    const [cart, dispatch] = useReducer(CartReducer, 
        {
        cartItems: cartFromStorage, 
        ...sumItems(cartFromStorage)
        }
    );

    function addItem(item) {
        dispatch({ type: 'ADD_ITEM', payload: item });
    }
    
    function increaseQty(item) {
        dispatch({ type: 'INCREASE_QTY', payload: item });
    }

    function decreaseQty(item) {
        dispatch({ type: 'DECREASE_QTY', payload: item });
    }
    
    function removeItem(item) {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
    }

    function clearCart() {
        dispatch({ type: 'CLEAR_CART' });
    }

    return (
        <CartContext.Provider value={{ ...cart, addItem, increaseQty, decreaseQty, removeItem, clearCart }}>
            { children }
        </CartContext.Provider>
    );
}