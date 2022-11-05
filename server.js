require('dotenv').config();

const express = require("express")
const app = express()

app.get("/greeting/:name", (req,res) => {

    res.send(`Hello, ${req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1)}`)

})


app.get("/tip/:total/:tipPercentage", (req, res) => {

    const total = +req.params.total
    const tipPercentage = +req.params.tipPercentage 
    const tipAmount = total * (tipPercentage/100)
    res.send(`Thanks for dining with us! Your total comes out to be $${total} and you want to tip us ${tipPercentage}% which equates to $${tipAmount}. Your grand total is $${total + tipAmount}.`)

})











app.listen(process.env.PORT, () => {
    console.log("Currently listening to port: " + process.env.PORT)
})

