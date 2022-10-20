const express = require("express")
const router = express.Router()

const CardCtrl = require("../controllers/cardController")

router.get("/api/cards", CardCtrl.getCardsList)
router.post("/api/cards", CardCtrl.addCard)

module.exports = router