import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import cartReducer from './CartReducer/CartReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { directoryReducer } from './DirectoryReducer';
import { shopDataReducer } from './ShopDataReducer';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cartReducer']
}

const rootReducer = combineReducers({
   userReducer : userReducer,
   cartReducer : cartReducer,
   directoryReducer : directoryReducer,
   shopDataReducer : shopDataReducer
});

export default persistReducer(persistConfig,rootReducer);