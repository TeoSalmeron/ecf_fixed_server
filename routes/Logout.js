const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {

    res.clearCookie("token", {
        path: "/"
    })

    res.json({logout: true})

})

module.exports = router