const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    mobile: {
        type: String,
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Addresses",
    }],
    paymentInformation: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PaymentInformation",
    }],
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ratings",
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reviews",
    }],
    // cart: [{
    //     type: mongoose.Schema.Types.ObjectId,
    // }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;