// Import .env
require("dotenv").config()

const express = require("express")
const app = express()
const db = require("./db.js")
const port = process.env.PORT || 3001

db.query("SELECT * FROM cars", (err, res) => {
    if (err) throw err
    console.log(res)
})

app.listen(port, () => {
    console.log("Server running on port : " + port)
})