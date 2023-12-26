const mongoose = require("mongoose")

const { Schema } = mongoose

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String
    },
    unitPrice: {
        type: Number,
        required: true
    },
    quantityInStock: {
        type: Number,
        default: 0
    },
    unitOfMeasure: {
        type: String,
        enum: ['kg', 'liter', 'each'],
        default: 'each'
    },
})
const product = mongoose.model("products",productSchema)
module.exports =  product