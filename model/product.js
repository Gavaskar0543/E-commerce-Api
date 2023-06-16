const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', postSchema);
console.log('Product model created:', Product); // Debug statement

module.exports = Product;
