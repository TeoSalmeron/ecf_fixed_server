const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")

router.get("/", auth, async (req, res) => {
    res.json({
        auth: true,
        id: req.userId,
        email: req.userEmail,
        role: req.userRole
    })
})

router.get("/is-connected", async (req, res) => {
    const token = req.cookies.token

    if(!token) {
        return res.json({
            connected: false
        })
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.json({
                    connected: false
                })
            } else {
                return res.json({
                    connected: true,
                    role: decoded.role
                })
            }
        });
    }
})

module.exports = router