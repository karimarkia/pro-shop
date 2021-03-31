import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Products from '../components/Products'

const Home = () => {
  const [product, setProduct] = useState([])

  const fetchData = async () => {
    const {data} = await axios.get('/api/product')
    setProduct(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {product.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
