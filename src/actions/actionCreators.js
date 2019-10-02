import { AddProduct, RemoveProduct, GetProducts } from './actionTypes'

export const addProduct = product => ({
  type: AddProduct,
  payload: product
})

export const removeProduct = product => ({
  type: RemoveProduct,
  payload: product
})

export const getProducts = () => ({
  type: GetProducts
})
