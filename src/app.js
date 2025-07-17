import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routes/index.js';

const app = express();

const connectDB = async () => {
  const uri = 'mongodb://127.0.0.1:27017/myLocalDatabase';
  await mongoose.connect(uri)
    .then(() => console.log('Connected to local MongoDB'))
    .catch(err => console.log('Connection error:', err));
};

await connectDB();

app.use(express.json());
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = 3001;
const HOST = "0.0.0.0"

app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}`);
});
