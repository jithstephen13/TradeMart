require('dotenv').config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { AuthModel } = require("../models/auth.model");

const authRouter = express();


// -------------------- USERS DATA GET REQUEST -------------------- //
authRouter.get("/", async (request, response) => {
    const query = request.query;

    try {
        const users = await AuthModel.find(query);
        response.send(users);
    } catch (error) {
        response.send({ "Message": "Cannot able to get the users data", "Error": error.message });
    }
});


// -------------------- USER REGISTRATION POST REQUEST -------------------- //
authRouter.post("/register", async (request, response) => {
    const { firstname, laststname, email, password } = request.body;

    try {
        if (firstname && laststname && email && password ) {
        const old_user = await AuthModel.find({ email: email });
        if (old_user.length > 0) {
            response.send({ "Message": "You're email address already exists, please Logged In" });
        } else {
            bcrypt.hash(password, 5, async (error, hash) => {
                if (error) {
                    response.send({ "Message": "Cannot able to hash the password", "Error": error });
                } else {
                    const new_user = new AuthModel({ firstname, laststname, email, password: hash, });
                    await new_user.save();
                    response.send({ "Message": "New User Successfully Registered! Please Logged In" });
                }
            });
        }
        } else {
            response.send({ "Message": "Fields are required" });
        }
    } catch (error) {
        response.send({ "Message": "Cannot able to get the users data", "Error": error.message });
    }
});


// -------------------- USER LOGIN POST REQUEST -------------------- //
authRouter.post("/login", async (request, response) => {
    const { email, password } = request.body;

    try {
        const user = await AuthModel.find({ email });
        if (user.length > 0 ) {
            bcrypt.compare(password, user[0].password, (error, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user[0]._id }, "auth", {expiresIn: 60 * 60 });
                    response.send({ 
                        "Message": `${user[0].firstname} ${user[0].laststname} you are successfully logged in`, 
                        "token": token, 
                        "name": `${user[0].firstname} ${user[0].laststname}`,
                        "role": `${user[0].role}`
                    });
                    // name and role
                } else {
                    response.send({ "Message": "Incorrect Password", "Error": error });
                }
            });
        } else {
            response.send({ "Message": "Incorrect Email Address! Please try again" });
        }
    } catch (error) {
        response.send({ "Message": "Authentication Failed", "Error": error.message });
    }
});


// -------------------- USER DELETE REQUEST -------------------- //
authRouter.delete("/delete/:id", async (request, response) => {
    const ID = request.params.id;

    try {
        await AuthModel.findByIdAndDelete({ _id: ID });
        response.send({ "Message": `User of id: ${ID} data successfully deleted` });
    } catch (error) {
        response.send({ "Message": `Cannot able to delete the users data of user id: ${ID}`, "Error": error.message });
    }
});




module.exports = { authRouter };