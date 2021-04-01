import express from 'express'
const app = express()
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import ProductRouter from './routes/productsRoutes.js'

dotenv.config()
// connect to the DB
connectDB()

app.get('/', (_, res) => {
  res.send('Api is running...')
})

app.use('/api/product', ProductRouter)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
