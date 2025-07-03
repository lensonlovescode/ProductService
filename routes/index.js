import express from 'express'
const router = express.Router()

import { getProducts, getProductById } from '../controllers/productsController'

router.get('/', getProducts)
router.get('/:id', getProductById)

export default router