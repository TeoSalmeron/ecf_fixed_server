// Import .env
require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const path = require("path")
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))
app.use(cookieParser())
app.use("/images", cors(), express.static(path.join(__dirname, "uploads/")));
console.log(path.dirname("../"))
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const authRouter = require("./routes/Auth")
app.use("/auth", authRouter)

const logInRouter = require("./routes/Login")
app.use("/login", logInRouter)

const logOutRouter = require("./routes/Logout")
app.use("/logout", logOutRouter)

const createEmployeeRouter = require("./routes/CreateEmployee")
app.use("/create-employee", createEmployeeRouter)

const schedulesRouter = require("./routes/Schedules")
app.use("/schedules", schedulesRouter)

const reviewsRouter = require("./routes/Reviews")
app.use("/reviews", reviewsRouter)

const carsRouter = require("./routes/Cars")
app.use("/cars", carsRouter)


app.listen(port, () => {
    console.log("Server running on port : " + port)
})