require('dotenv').config();

const express = require("express")
const app = express()

app.get("/greeting/:name", (req,res) => {

    res.send(`Hello, ${req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1)}`)

})














app.listen(process.env.PORT, () => {
    console.log("Currently listening to port: " + process.env.PORT)
})

