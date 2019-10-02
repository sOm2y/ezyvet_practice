import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { List, Drawer, Button } from 'antd'
import { removeProduct } from '../actions/actionCreators'

const CartContainer = ({ ...props }) => {
  const { collapsed, onClose, removeProduct, carts } = props

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    calculateTotalPrice()
  }, [carts])

  const calculateTotalPrice = () => {
    let totalPrice = carts
      .map(item => item.quantity * item.product.price)
      .reduce((prev, curr) => prev + curr, 0)
    setTotalPrice(totalPrice)
  }

  return (
    <Drawer
      width={720}
      title="shopping cart"
      placement="right"
      closable={true}
      onClose={onClose}
      visible={collapsed}
    >
      <List
        itemLayout="horizontal"
        dataSource={carts}
        footer={
          <div>
            <b>{`Total price : ${totalPrice.toLocaleString(undefined, {
              style: 'currency',
              currency: 'NZD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 2
            })}`}</b>
          </div>
        }
        renderItem={(cartItem, index) => (
          <List.Item
            key={index}
            actions={[
              <Button onClick={() => removeProduct(cartItem)}> Remove </Button>
            ]}
          >
            <List.Item.Meta
              title={cartItem.product.name}
              description={(
                cartItem.product.price * cartItem.quantity
              ).toLocaleString(undefined, {
                style: 'currency',
                currency: 'NZD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
              })}
            />
            <p> x {cartItem.quantity}</p>
          </List.Item>
        )}
      />
    </Drawer>
  )
}

const mapStateToProps = (state, props) => {
  return {
    carts: state.cartReducer.carts
  }
}

const mapDispatchToProps = {
  removeProduct
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
