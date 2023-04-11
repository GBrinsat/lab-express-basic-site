const express = require("express")
const app = express()
const port = 3000

// use Public folder

app.use(express.static(__dirname + "/public"))

// direct to views

app.get( "/", (request, response) => {
    response.sendFile(__dirname + "/views/home.html")
})

app.get( "/about", (request, response) => {
    response.sendFile(__dirname + "/views/about.html")
})

app.get( "/music", (request, response) => {
    response.sendFile(__dirname + "/views/music.html")
})

app.get( "/gallery", (request, response) => {
    response.sendFile(__dirname + "/views/gallery.html")
})


// start to listen

app.listen(port, () => {
    console.log(`Website running on Port ${port}`)
})