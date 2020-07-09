var PORT = process.env.PORT || 3000;
var express = require("express");
var app = express();
var axios = require("axios");

app.use(express.static("public"));

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

app.listen(PORT,function(){
    console.log("Hello!! server is working!!");
});