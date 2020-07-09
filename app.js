var PORT = process.env.PORT || 3000;
var express = require("express");
var app = express();
var axios = require("axios");
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    axios("https://api.covid19api.com/summary")
        .then(function(response){
            res.render("home.ejs",{data : response.data});
        })
        .catch(function(err){
            if(err){
                res.render(err);
            }

        });
});
app.get("/countries",function(req,res){
    axios()
});

app.listen(PORT,function(){
    console.log("Hello!! server is working!!");
});