const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")

router.get("/", auth, async (req, res) => {
    res.json({
        auth: true,
        // role: req.userRole
    })
})

module.exports = router