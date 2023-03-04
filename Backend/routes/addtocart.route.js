const express = require("express");

const { CartModel } = require("../models/addtocart.model");
const jwt = require("jsonwebtoken");

const cartRouter = express();



// ---------------- GET ALL CART DATA GET REQUEST ---------------- //
cartRouter.get("/", async (request, response) => {

    try {
        const cartdata = await CartModel.find();
        response.send(cartdata);
    } catch (error) {
        response.send({ "Message": "Cannot able to get the cart data", "Error": error.message });
    }
});


// ---------------- DATA ADDED INTO THE CART POST REQUEST ---------------- //
cartRouter.post("/addtocart", async (request, response) => {
    const payload = request.body;

    try {
        const cartdata = new CartModel(payload);
        await cartdata.save();
        response.send({ "Message": "Item Successfully Added Into The Cart!" });
    } catch (error) {
        response.send({ "Message": "Cannot able to add the data to cart", "Error": error.message });
    }
 
});


// ---------------- CART DATA DELETE REQUEST ---------------- //
cartRouter.delete("/delete/:id", async (request, response) => {
    const ID = request.params.id;

    try {
        await CartModel.findByIdAndDelete({ _id: ID });
        response.send({ "Message": `Cart Item of id: ${ID} is successfully deleted from cart` });
    } catch (error) {
        response.send({ "Message": "Cannot able to get the cart data", "Error": error.message });
    }
});



module.exports = { cartRouter };