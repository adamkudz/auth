const express = require("express")
const router = express.Router()
const Member = require("../Models/MemberModel.model")

// Get all Members

router.get("/", async (req, res) => {
  try {
    let member = await Member.find()
    if (member == null) {
      res.status(404).json({ message: "could not find any users" })
    }
    res.json(member)
  } catch (err) {
    res.json({ message: err })
  }
})

//Get One Member

//Add a Member

//Delete a Member

router.get("/", (req, res) =>
  res.send("<h1> You Made it to the Member route</h1>"),
)

module.exports = router
