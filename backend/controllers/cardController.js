const Card = require("../models/Card");
const fs = require("fs");

exports.getCardsList = (req, res, next) => {
  Card.find()
    .then((cards) => res.status(200).json(cards))
    .catch((error) => res.status(400).json({ error }));
};

exports.addCard = (req, res, next) => {
  const card = new Card({
    ...req.body
  });
  card
    .save()
    .then(() => res.status(201).json({ message: "New card added !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteCard = (req, res, next) => {
  id = req.params.id;
  Card.deleteOne({ _id: id })
    .then(() => res.status(201).json({ message: `Card ${id} deleted !` }))
    .catch((error) => res.status(400).json({ error }));
};
