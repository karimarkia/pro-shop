import { Row, Col } from 'react-bootstrap'
import Products from '../components/Products'
import productsArr from '../products'

const Home = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {productsArr.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
