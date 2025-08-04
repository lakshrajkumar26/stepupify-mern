const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
   
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Product",
        default: 0,
    },
    review:{
        type : String,
        required : true,
    },
    createdAt : {
        type:Date,
        default:Date.now(),
    }
}); 
const Reviews = mongoose.model("Reviews",reviewSchema);

module.exports =  Reviews ;