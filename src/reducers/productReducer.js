import { GetProductsSuccess } from '../actions/actionTypes'
const initialState = { products: [] }
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetProductsSuccess:
      return { ...state, products: action.payload }

    default:
      return state
  }
}

export default productReducer
