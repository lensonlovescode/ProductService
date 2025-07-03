const mongoose = require('mongoose')


const connectDB = async ()=>{
const uri='mongodb://127.0.0.1:27017/myLocalDatabase';

await mongoose.connect(uri)
.then(()=>{
    console.log('Connected to local MongoDB');
})
.catch(err=>{
    console.log('Connection error: ', err);
});
};
//module.exports= connectDB



//product schema definition

const productSchema = new mongoose.Schema({
  name: { type: String,
     required: true,
      trim: true,
     },

  description: {type: String,
     trim: true },

  price: { type: Number,
     required: true },

  category: {type: String,
    required: true },

  NumberInStock: { type: Number,},

  color: {type: String},

  images: [String], //image URLs

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

//module.exports = mongoose.model('Product', productSchema);
const Product = mongoose.model('Product', productSchema);


//For Exporting both connectionDB and product schema
module.exports= {
  connectDB,
  productSchema
};
