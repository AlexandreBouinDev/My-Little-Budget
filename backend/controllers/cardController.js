const Card = require("../models/Card")
const fs = require("fs")

exports.getCardsList = (req, res, next) => {
    Card.find()
        .then(cards => res.status(200).json(cards))
        .catch(error => res.status(400).json({ error }))
}

exports.addCard = (req, res, next) => {
    console.log(req.body)
    const card = new Card({
        ...req.body
    })
    card.save()
        .then(() => res.status(201).json({ message: "New card added !" }))
        .catch(error => res.status(400).json({ error }))
}
