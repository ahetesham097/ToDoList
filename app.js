const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"))

var items = ["Buy Food","Cook Food"];
var newWorkList = [];



app.set("view engine","ejs")



app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    var today = new Date();
    var options = {
        weekday:"long",
        day: "numeric",
        month:"long"
    }
    var day = today.toLocaleDateString("en-US",options);
    res.render("days",{listTitle:day, newListItems:items});
})

app.post("/", function(req,res){

    var item = req.body.newItem;

    if(req.body.list ==="Work"){
        newWorkList.push(item);
        res.redirect("/work") 
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
    
    
})

app.get("/work",function(req,res){
    res.render("days",{listTitle:"Work of the Day",newListItems:newWorkList});
})

app.post("/work", function(req,res){
    newWorkList.push(item);
    res.redirect("/work")
})

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("server Started");
})