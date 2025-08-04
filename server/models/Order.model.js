const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    // products: [{
    //     product: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Product',
    //         required: true
    //     },
    //     quantity: {
    //         type: Number,
    //         required: true,
    //         default: 1
    //     }
    // }],

    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderItems",
        required: true,
    }],
     orderDate:{
        type: Date,
        required: true,
        default: Date.now(),
     },
     deliveryDate:{
        type: Date,
        required: true,
        default: Date.now() + 7 * 24 * 60 * 60 * 1000,  //cheeck
     },
     paymentDetails:{
        PaymentMethod: {
            type: String,
        },
        paymentStatus: {
            type: String,
            default: "pending",
        },
        paymentId: {
            type: Date,
        },
        transactionId: {
            type: String,
        },
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    totalItems: {
        type: Number,
        required: true,
    },
    totalDiscountPrice: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
        default: "pending",
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order; 
