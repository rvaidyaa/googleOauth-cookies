const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const { Schema } = mongoose;
//line 2 and 3 are the same

// mongoose want to know all the different properties

const userSchema = new Schema({
    googleId: String
});

mongoose.model("users", userSchema);
//telling mongoose we want to create a collection called users, and use the userSchema for it
