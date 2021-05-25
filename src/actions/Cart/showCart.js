import {userActionTypes} from '../../reducers/types';

export const showCart = () =>{
    return {
        type: userActionTypes.SHOW_DROPDOWN,
        
    }
}

export const additem = (payload) =>{
    return {
        type: userActionTypes.ADD_ITEM,
        payload: payload
    }
}

export const removeitem = (id) =>{
    return {
        type: userActionTypes.REMOVE_ITEM,
        payload: id
    }
}

export const removeSingleItem = (item) =>{
    return {
        type: userActionTypes.REMOVE_SINGLE_ITEM,
        payload: item
    }
}