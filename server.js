require('dotenv').config();

const express = require("express")
const app = express()

app.get("/greeting/:name", (req,res) => {

    res.send(`Hello, ${req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1)}`)

})

//Tip Calculator

app.get("/tip/:total/:tipPercentage", (req, res) => {

    const total = +req.params.total
    const tipPercentage = +req.params.tipPercentage 
    const tipAmount = total * (tipPercentage/100)
    res.send(`Thanks for dining with us! Your total comes out to be $${total} and you want to tip us ${tipPercentage}% which equates to $${tipAmount}. Your grand total is $${total + tipAmount}.`)

})


//Magic 8 Ball

app.get("/magic/:question", (req,res) => {
const questionAsked = req.params.question.charAt(0).toUpperCase() + req.params.question.slice(1).toLowerCase()

const quotes = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
const randomNumber = Math.round(Math.random()*quotes.length)
const randomQuote = quotes[randomNumber]

    res.send(`<h1>Your question: ${questionAsked}?</h1> <h1>My answer: ${randomQuote}</h1>`)

})


// app.get("/count/:beverage", (req, res) => {

//     const beverage = req.params.beverage
//     const numberOfBev = req.query.numberOfBev

//     for (i = numberOfBev; i>0; i-=1){
//     setTimeout(() => { res.send(`You have ${i} of ${beverage} left.`)
// }, 1000)
// }}

// )





app.listen(process.env.PORT, () => {
    console.log("Currently listening to port: " + process.env.PORT)
})

