const mongoose = require('mongoose');

// MongoDB connection
const connectDB = async () => {
  const uri = 'mongodb://127.0.0.1:27017/myLocalDatabase';

  await mongoose.connect(uri)
    .then(() => {
      console.log('Connected to local MongoDB');
    })
    .catch(err => {
      console.log('Connection error: ', err);
    });
};


// Product schema
const productSchema = new mongoose.Schema({
  name: { type: String,
    required: true, 
    trim: true },


  description: { type: String,
    trim: true },

  price: { type: Number,
    required: true },

  category: { type: String,
    required: true },

  NumberInStock: { type: Number },

  color: { type: String },

  images: [String], // (image URLs)

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

// Dummy data (10 items)
const dummyProducts = [
  
  {
    name: 'Cotton T-Shirt',
    description: 'Comfortable unisex t-shirt',
    price: 800,
    category: 'Clothing',
    NumberInStock: 50,
    color: 'White',
    images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/white%20cotton%20shirt.webp'] 
  },
{
    name: 'Running Shoes',
    description: 'Lightweight running shoes for men',
    price:4200,
    category: 'Footwear',
    NumberInStock: 10,
    color: 'Gray',
    images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/greyshoesmen.webp']
  },
  {
    name: 'Leather Wallet',
    description: 'Genuine leather men’s wallet',
    price:1200,
    category: 'Accessories',
    NumberInStock: 25,
    color: 'Brown',
    images: ['']
  },
  
  {
    name: 'Laptop Bag',
    description:'Waterproof backpack with laptop compartment',
    price:2700,
    category: 'Accessories',
    NumberInStock:2,
    color:'Navy Blue',
    images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/bagpack%20laptop.jpg']
  },
  {
    name: 'Sunglasses',
    description: 'UV-protected sunglasses with polarized lenses',
    price: 500,
    category:'Accessories',
    NumberInStock: 18,
    color:'Black',
    images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/black%20sunglasses.webp']
  },
  {
      name:'Men’s Denim Jacket',
      description: 'Classic blue denim jacket with button closure.',
      price:3500,
      category: 'Men',
      NumberInStock:7,
      color: 'Blue',
      images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/blue%20denim.webp']
    },
{
      name: 'Women’s Summer Dress',
      description: 'Floral printed cotton sundress, knee-length.',
      price:2000,
      category: 'Women',
      NumberInStock: 20,
      color: 'Red',
      images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/red%20sundress.webp']
    },
{
      name: 'Unisex Hoodie',
      description: 'Soft fleece hoodie, perfect for cool evenings.',
      price: 800,
      category: 'Unisex',
      NumberInStock:13,
      color:'Black',
      images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/black%20hoodie.webp']
    },
    {
      name: 'Children’s T-Shirt',
      description: 'Colourful cartoon print t-shirt for kids.',
      price:300,
      category: 'Kids',
      NumberInStock:12,
      color: 'Yellow',
      images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/kids%20yellow%20tshirt.webp']
    },
    {
      name: 'Women’s Skinny Jeans',
      description: 'High-waist stretchable jeans for women.',
      price:1200,
      category: 'Women',
      NumberInStock: 15,
      color:'Dark Blue',
      images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/skinny%20jeans%20women.webp']
    },
    {
      name: 'Men’s Formal Shirt',
      description: 'Slim-fit cotton shirt, ideal for office wear.',
      price: 1200,
      category: 'Men',
      NumberInStock:15,
      color: 'White',
      images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/white%20cotton%20shirt.webp']
    },
    {
      name: 'Women’s Cardigan',
      description: 'Long sleeve knit grey cardigan for cool weather.',
      price: 900,
      category: 'Women',
      NumberInStock: 10,
      color: 'Grey',
      images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/womens%20cardigan%20grey.jpg']
    },
    {
      name:'Men’s Cargo Shorts',
      description: 'Comfort-fit cargo shorts with side pockets.',
      price:1600,
      category: 'Men',
      NumberInStock:8,
      color: 'Khaki',
      images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/mens%20khaki%20cargo%20short.webp']
    },
    {
      name: 'Unisex Socks (3 Pack)',
      description: 'Cotton ankle socks, pack of 3 pairs.',
      price: 500,
      category: 'Accessories',
      NumberInStock:20,
      color: 'Mixed',
      images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/3%20pack%20ankle%20socks.webp']
    },
    {
      name: 'Kids Raincoat',
      description: 'Waterproof raincoat with cartoon prints.',
      price: 1200,
      category:'Kids',
      NumberInStock: 14,
      color: 'Dark',
      images: ['https://github.com/lensonlovescode/ProductService/blob/main/src/models/Product%20images/dark%20raincoat.webp']
    }
];


// for Inserting dummy data
const seedProducts = async () => {
  await connectDB();

  try {
    await Product.deleteMany(); // for Clearing existing products
    const inserted = await Product.insertMany(dummyProducts);
    console.log('Inserted ${inserted.length} dummy products');
  } catch (err) {
    console.error('Error inserting dummy products:', err);
  } finally {
    mongoose.connection.close(); // Close the DB connection
  }
};

seedProducts();
