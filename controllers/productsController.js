import Product from '../models/products.js'
import AsyncHandler from 'express-async-handler'

export const getProducts = AsyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: 'i' } } 
    : {}

  const category = req.query.category
    ? { category: req.query.category }
    : {}

  const priceFilter = {}
  if (req.query.minPrice) priceFilter.$gte = Number(req.query.minPrice)
  if (req.query.maxPrice) priceFilter.$lte = Number(req.query.maxPrice)

  const price = Object.keys(priceFilter).length > 0 ? { price: priceFilter } : {}
  
  const products = await Product.find({
    ...keyword,
    ...category,
    ...price,
  })
  res.json(products)
})

export const getProductById = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})