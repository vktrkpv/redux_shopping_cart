import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const { cloth, quantity } = action.payload;
            if(!cloth ) return;

            state.cartItems.push({
                clothID: cloth.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.cloth.price
            })
        },
        removeItemFromCart: ( state, action ) => {
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.clothID !== action.payload )

        }
     },

})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total;
    }, 0)
}

export default cartSlice.reducer;
export const getCartItems = state => state.cart.cartItems;
export  const { addItemToCart, removeItemFromCart } = cartSlice.actions;