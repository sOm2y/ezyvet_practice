import React from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'antd'
import { addProduct } from '../actions/actionCreators'

const Product = ({ ...props }) => {
  const { product, addProduct } = props
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title={product.name} bordered={false}>
        <p>
          {product.price.toLocaleString(undefined, {
            style: 'currency',
            currency: 'NZD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
          })}
        </p>
        <Button
          type="primary"
          onClick={() => {
            addProduct(product)
          }}
        >
          Add to cart
        </Button>
      </Card>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = {
  addProduct
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
