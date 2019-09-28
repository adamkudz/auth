const express = require("express")
const passport = require("passport")
const session = require("express-session")
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
// passport.use(
//   new LocalStrategy(function(username, password, done) {
//     User.findOne(
//       { username: username, password: password, session: false },
//       function(err, user) {
//         if (err) {
//           return done(err)
//         }
//         if (!user) {
//           return done(null, false, { message: "Incorrect username." })
//         }
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: "Incorrect password." })
//         }
//         return done(null, user)
//       },
//     )
//   }),
// )
// passport.serializeUser(function(user, done) {
//   done(null, user.id)
// })

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user)
//   })
// })

// Router.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/members",
//     fialureRedirect: "/login",
//     failureFlash: true,
//   }),
// )

//Get One Member

//Add a Member

//Delete a Member

router.get("/", (req, res) =>
  res.send("<h1> You Made it to the Member route</h1>"),
)

module.exports = router
