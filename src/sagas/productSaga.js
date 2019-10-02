import { message } from 'antd';
import { GetProducts, GetProductsSuccess } from '../actions/actionTypes'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getProducts } from '../services'

function* getProductsSaga() {
  try {
    message.loading('loading products...',0)
    const products = yield call(getProducts)
    message.destroy()
    yield put({ type: GetProductsSuccess, payload: products })
  } catch (error) {
    message.error('Get products failed')
  }
}

function* productSaga() {
  yield takeEvery(GetProducts, getProductsSaga)
}

export default productSaga
