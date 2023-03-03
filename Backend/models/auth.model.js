const mongoose = require("mongoose");



const authSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    laststname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    versionKey: false
});



const AuthModel = mongoose.model("user", authSchema);



module.exports = { AuthModel };