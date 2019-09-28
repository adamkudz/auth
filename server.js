require("dotenv").config()

const passport = require("passport")
const session = require("express-session")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000
const cors = require("cors")
const morgan = require("morgan")
const LoginRouter = require("./routes/login.route")
const MemberRouter = require("./routes/member.route")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("combined"))
app.use(cors())
app.use(express.static("public"))
//
//  PASSPORT RELATED MIDDLEWARE
// app.use(session({ secret: "secret", resave: false, saveUninitialized: true }))
// app.use(passport.initialize())
// app.use(passport.session())

//
//
app.use("/login", LoginRouter)
app.use("/members", MemberRouter)

//

app.get("/admin", (req, res) => {
  res.send("<h1>This is the admin route </h1>")
})

//connect to db
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
let db = mongoose.connection
db.on("error", error => console.error(error))
db.once("open", () => console.log("Horray, you've connected to the database"))

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`)
})
