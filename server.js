const express = require("express")
const nunjucks = require("nunjucks")
const recipes = require("./data")

const server = express()

server.set("view engine", "njk")

nunjucks.configure("view", {
    express:server
})

server.use(express.static("public"))
server.use(express.static("assets"))

server.get("/", function(req,res){
   return res.render("index", {items : recipes})
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/recipes", function(req,res){
   return res.render("recipes", {items : recipes})
})

server.get("/recipes/:index", function(req,res){
    const id = req.params.index;    
    
    return res.render("cookdetails", {items : recipes[id]})
})

server.listen(5000, function(){
    console.log("Server is running!")
})