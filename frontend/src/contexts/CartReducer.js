// state:        
// {
//     cartItems: [], 
//     itemCount: 0, 
//     total: 0
// }
function storeCartItems(cartItems) { // store to local storage 
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

export function sumItems(cartItems) { // array
    storeCartItems(cartItems); // storage up to date with every change to cart
    return {
        itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0), // 0 is init value of total; returns a number
        total: cartItems.reduce((total, prod) => total + (prod.quantity * prod.price), 0)
    }
}

export default function CartReducer(state, { type, payload }) {
    switch (type) {
        case 'ADD_ITEM':
            //check if item is in cart
            if (!state.cartItems.find(item => item.id === payload.id)) { // if not already in cart
                state.cartItems.push({
                    ...payload,
                    quantity: 1
                });
            }

            return {
                ...state, // not necessary
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
        case 'INCREASE_QTY':
            const incIndex = state.cartItems.findIndex(item => item.id === payload.id);
            state.cartItems[incIndex].quantity++;

            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
        case 'DECREASE_QTY':
            const decIndex = state.cartItems.findIndex(item => item.id === payload.id);
            state.cartItems[decIndex].quantity--;

            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
        case 'REMOVE_ITEM':
            const newArr = state.cartItems.filter(item => item.id !== payload.id);
            
            return {
                ...state,
                cartItems: newArr,
                ...sumItems(newArr)
            }
        case 'CLEAR_CART':
            localStorage.removeItem('cart');

            return {
                cartItems: [], 
                itemCount: 0, 
                total: 0
            }
        default:
            return state;
    }
}