const express = require('express')
const mongoose = require('mongoose')
const productRouter = require('./routes/index.js')

const app = express()

const connectDB = async () => {
	const uri = 'mongodb://mongo:27017/ShopTure'
	try {
		await mongoose.connect(uri)
		console.log('Connected to local MongoDB')
	} catch (err) {
		console.log('Connection error:', err)
	}
}

connectDB()

app.use(express.json())
app.use('/api/products', productRouter)

app.get('/', (req, res) => {
	res.send('API is running')
})

const PORT = 3001
const HOST = '0.0.0.0'

app.listen(PORT, HOST, () => {
	console.log(`Server running on port ${PORT}`)
})