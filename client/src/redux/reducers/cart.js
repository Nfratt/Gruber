/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 * Remember that actions only describe what happened, but don't describe how the application's state changes.
 * @see {@link https://redux.js.org/basics/reducers}
 * 
 */


import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {

            console.log('running')
            let newTotal = state.total + action.payload.product.price
            return {
                ...state,
                products: [...state.products, action.payload.product],
                total: newTotal
            };
        }
        case REMOVE_FROM_CART: {
            // let itemToRemove = state.products.find(item => action.id === item.id)
            let new_items = state.products.filter(product => action.payload.product._id !== product._id)

            //calculating the total
            // let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        debugger
            return {
                ...state,
                products: new_items,
                // total: newTotal
            }
        }

        // return {
        //     ...state,
        //     products:[...state.products, action.payload.product]
        // };
        // }
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