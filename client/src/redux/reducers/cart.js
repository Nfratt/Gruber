/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 * Remember that actions only describe what happened, but don't describe how the application's state changes.
 * @see {@link https://redux.js.org/basics/reducers}
 * 
 */


import { ADD, REMOVE } from "../actionTypes";

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD: {
            
            return {
                ...state,
                products: [...state.products, action.payload.product]
            };
        }
        // case REMOVE: {
        //     // remove all tokens from local storage
        
        //     return {
        //         ...state,
        //         products: setUserDetails()
        //     };
        // }
        default:
            return {
                ...state,
                products: []
            };
    }
}

export const initialState = {
    products: []
};