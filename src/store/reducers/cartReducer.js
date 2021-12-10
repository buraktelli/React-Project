import { cartItems, products } from "../initialValues/cartItems";
import { ADD_TO_CART, REMOVE_FROM_CART, GET_PRODUCT_LIST_ERROR, GET_PRODUCT_LIST } from "../actions/cartActions"

const initialState = {
    cartItems,
    products,
    message: ''
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)
            if (product) {
                product.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.product.id !== payload.id)
            }
        case GET_PRODUCT_LIST:
            console.log('GELDI');
            return {
                ...state,
                products: payload
            }
        case GET_PRODUCT_LIST_ERROR:
            return {
                ...state,
                message: payload
            }
        default:
            return state;
    }
}