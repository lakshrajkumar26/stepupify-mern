const mongoose = require("mongoose");
const ratingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
   
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Product",
        default: 0,
    },
    rating:{
        type : Number,
        required : true,
    },
    createdAt : {
        type:Date,
        default:Date.now,
    }
}); 
const Ratings = mongoose.model("Ratings",ratingSchema);
module.exports = Ratings;