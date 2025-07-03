const express = require('express')
const connectDB = require('./models/products.js')
const productRouter = require('./routes/index.js')
const app = express()

connectDB()

app.get('/', (req, res) => {

});

app.use(express.json())
app.use('/api/products', productRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});