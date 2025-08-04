const Cart = require("../models/cart.model");

const createCart = async(req,res) => {
    try{  //in initial just need a user 
       const cart =  new Cart.create();
       const createdCart = await cart.save();
       res.status(200).json({})
     }
    catch(err){
      res.status(500).json({})
    }
}

module.exports = {createCart}