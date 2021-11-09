const mongoose = require("mongoose") 
const butterflySchema = mongoose.Schema({ 
    Size: String,
    color: String,
    price: Number
}) 
 
module.exports = mongoose.model("butterfly", 
butterflySchema) 