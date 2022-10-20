const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const router = require("./routes/routes.js")

mongoose.connect("mongodb+srv://alexandrebouin:1234@my-little-budget.uj7i1.mongodb.net/test")
    .then(() => console.log("Connexion à MongoDB réussie"))
    .catch(() => console.log("Connexion à MongoDB échouée"))

app.use('/', router)

module.exports = app