import express from 'express'
const router = express.Router()
import Product from '../model/productModel.js'

router.get('/', async (req, res) => {
  const product = await Product.find({})
  res.json(product)
})

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Product Not Found' })
  }
})

export default router