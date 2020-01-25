import { LOGIN, LOGOUT, ADD_TO_CART, ADD_QUANTITY, REMOVE_FROM_CART, REM_QUANTITY } from "./actionTypes";

export const onLogin = (tokens) => ({
    type: LOGIN,
    payload: { tokens }
});

export const onLogout = () => ({
    type: LOGOUT
});

export const onAdd = (product) => ({
    type: ADD_TO_CART,
    payload: { product }

});
export const onRemove = (product) => ({
    type: REMOVE_FROM_CART,
    payload: { product }
});

export const subtractQuantity=(product)=>{
    return{
        type: REM_QUANTITY,
        payload: { product }
    }
}

export const addQuantity=(product)=>{
    return{
        type: ADD_QUANTITY,
        payload: {product}
    }

    
}