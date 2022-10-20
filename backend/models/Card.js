const mongoose = require("mongoose")

const card = mongoose.Schema({
    name: { type: String },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    ignored: { type: Boolean, required: true },
})

module.exports = mongoose.model("Card", card)