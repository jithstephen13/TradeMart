require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.set('strictQuery', true)

const { connection } = require("./configs/db.connnect");
const { authRouter } = require("./routes/auth.route");
const { medicinRouter } = require('./routes/medicin.route');
const { projectorRouter } = require('./routes/projector.route');
const { solarpanelRouter } = require('./routes/solarpanel.route');
const { cartRouter } = require('./routes/addtocart.route');
 

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (request, response) => {
    response.send("Welcome to TradeMart website");
});

app.use("/users", authRouter);
 
 
app.use("/medicin", medicinRouter);
app.use("/projector", projectorRouter);
app.use("/solarpanel", solarpanelRouter);

app.use("/cart",cartRouter)
 



app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log(`Server is running at port ${process.env.port}`);
    } catch (error) {
        console.log("Cannot able to start the server", "Error: ",error);
    }
});