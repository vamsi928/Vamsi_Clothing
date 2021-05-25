import {userActionTypes} from '../../reducers/types';

export const setCurrentUser = (payload) => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: payload,
  };
};
