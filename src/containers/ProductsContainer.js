import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Layout, Icon, Row, Col } from 'antd'
import Product from '../components/Product'
import { getProducts } from '../actions/actionCreators'
const { Header, Content } = Layout

const ProductsContainer = ({ ...props }) => {
  const { products, toggleCart, getProducts } = props
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon className="trigger" type="shopping-cart" onClick={toggleCart} />
      </Header>

      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 280
        }}
      >
        <Row type="flex">
          {products &&
            products.map((product, key) => (
              <Col key={key} span={6}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      </Content>
    </Layout>
  )
}

const mapStateToProps = (state, props) => {
  return {
    products: state.productReducer.products
  }
}

const mapDispatchToProps = {
  getProducts
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
