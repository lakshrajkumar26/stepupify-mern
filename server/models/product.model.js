const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: true,
    },
    discountPercent: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    category: String,       // 37:55 not creating category.model
    image: String,
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ratings",
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reviews",
    }],
    numRatings:{
        type:Number,
        default : 0,
    },
    stock: {
        type: Number,
        default: 0
    },
    createdAt : {
        type:Date,
        default:Date.now,
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
