import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={ProductList} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
