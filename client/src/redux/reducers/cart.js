import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {

            console.log('running')
            let newTotal = (+state.total  + (+action.payload.product.price * 100))
            console.log(newTotal)
            return {
                ...state,
                products: [...state.products, action.payload.product],
                total: newTotal
            };
            
        }
        case REMOVE_FROM_CART: {
            // let itemToRemove = state.products.find(item => action.id === item.id)
            let new_items = state.products.filter(product => action.payload.product._id !== product._id)
            let newTotal = (+state.total - (+action.payload.product.price * 100))
         console.log(newTotal)
            return {
                ...state,
                products: new_items,
                total: newTotal
            }
        }
        default:
            return {
                ...state,
                products: []
            };
    }
}

export const initialState = {
    products: [],
    total: 0
};