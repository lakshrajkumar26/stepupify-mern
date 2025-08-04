const mongoose = require("mongoose");
const cardItemsSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    price: {
        type: Number,
        required: true,
    },
    discountedPrice:{
        type: Number,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    // cartId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Carts",
    //     required: true,
    // }
});
const CardItems = mongoose.model("CartItems",cardItemsSchema);
module.exports = CardItems;