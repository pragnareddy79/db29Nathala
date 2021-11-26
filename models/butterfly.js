const mongoose = require("mongoose") 
const butterflySchema = mongoose.Schema({ 
    Size: String,
    color: {
       type: String,
       minLength:2
    },
    price: Number
}) 
 
module.exports = mongoose.model("butterfly", 
butterflySchema) 