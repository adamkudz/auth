const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>
  res.send("<h1> You Made it to the Member route</h1>"),
)

module.exports = router
