const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type: String,
        reqired: true,
    },
    price:{
        type: Number,
        reqired: true,
    },
    productImage: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Product', productSchema)