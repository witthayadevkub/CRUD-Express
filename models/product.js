const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    // date: { type: Date, default: Date.now }
},{timestamps:true})

module.exports = mongoose.model('Product', ProductSchema);