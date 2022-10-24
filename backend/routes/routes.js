const express = require("express");
const router = express.Router();

const CardCtrl = require("../controllers/cardController");

router.get("/api/cards", CardCtrl.getCardsList);
router.post("/api/cards", CardCtrl.addCard);
router.delete("/api/cards/:id", CardCtrl.deleteCard);

module.exports = router;
