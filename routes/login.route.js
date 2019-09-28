const express = require("express")
const Router = express.Router()
const passport = require("passport")
const LocalStrategy = require("passport-local")

Router.get("/", (req, res) =>
  res.send("<h1>You have reached the Login Route</h1>"),
)

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
module.exports = Router
