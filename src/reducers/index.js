import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import cartReducer from './cartReducer'
import productReducer from './productReducer'

const cartPersistConfig = {
  key: 'cart',
  storage
}

const allReducers = combineReducers({
  productReducer: productReducer,
  cartReducer: persistReducer(cartPersistConfig, cartReducer)
})

export default allReducers
