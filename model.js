const mongoose = require("mongoose")
const gameModel = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    difficulty:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("gameAPI", gameModel)