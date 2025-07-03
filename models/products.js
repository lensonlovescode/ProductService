const mongoose = require('mongoose')


const connectDB = async ()=>{
const uri='mongodb://127.0.0.1:27017/myLocalDatabase'

await mongoose.connect(uri)
.then(()=>{
    console.log('Connected to local MongoDB')
})
.catch(err=>{
    console.log('Connection error: ', err)
})
}
module.exports= connectDB