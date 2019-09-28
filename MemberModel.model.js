const mongoose = require("mongoose")

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

module.exports = new mongoose.model("MemberModel", MemberSchema)
