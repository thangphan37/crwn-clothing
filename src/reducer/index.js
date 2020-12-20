import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import {userReducer} from './user'
import {cartReducer} from './cart'
import {directoryReducer} from './directory'
import {shopReducer} from './shop'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'cart',
  storage: storage,
  whitelist: ['cartReducer'],
}
const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  directoryReducer,
  shopReducer,
})

// export {rootReducer}

export default persistReducer(persistConfig, rootReducer)
