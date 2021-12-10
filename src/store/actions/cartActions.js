import ProductService from "../../services/productService"

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST"
export const GET_PRODUCT_LIST_ERROR = "GET_PRODUCT_LIST_ERROR"


export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export const getProductList = () => dispatch => {
    let productService = new ProductService()
    productService.getProducts()
        .then(result => {
            console.log('result', result);
            dispatch({ type: GET_PRODUCT_LIST, payload: result.data.data })
        }
        )
        .catch(error =>
            dispatch({ type: GET_PRODUCT_LIST_ERROR, payload: error })
        )
}