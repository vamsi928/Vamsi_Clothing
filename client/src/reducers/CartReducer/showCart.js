import {cartActionTypes} from './CartTypes';

export const showCart = () =>{
    return {
        type: cartActionTypes.SHOW_DROPDOWN,
        
    }
}

export const additem = (payload) =>{
    return {
        type: cartActionTypes.ADD_ITEM,
        payload: payload
    }
}

export const removeitem = (id) =>{
    return {
        type: cartActionTypes.REMOVE_ITEM,
        payload: id
    }
}

export const removeSingleItem = (item) =>{
    return {
        type: cartActionTypes.REMOVE_SINGLE_ITEM,
        payload: item
    }
}

export const clearCart = () => {
    return{
        type: cartActionTypes.CLEAR_CART
    }
}