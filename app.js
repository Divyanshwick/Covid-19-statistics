var PORT = process.env.PORT || 3000;
var express = require("express");
var app = express();
var axios = require("axios");
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(req,res){
//     res.redirect("/global");
// });

app.get("/global",function(req,res){
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
app.get("/global/:country",function(req,res){
    var country = req.query.country.charAt(0).toUpperCase() + req.query.country.slice(1).toLowerCase();
    axios("https://api.covid19api.com/summary")
        .then(function(response){
            res.render("countries.ejs",{data : response.data , country : country});
        })
        .catch(function(err){
            if(err){
                res.render(err);
            }
        });
});

app.get("/india",function(req,res){
    axios("https://api.covid19india.org/data.json")
    .then(function(response){
        res.render("india.ejs",{data : response.data});
        
    })
    .catch(function(err){
        if(err){
            res.render(err);
        }
    });
    
});

app.get("/india/:state",function(req,res){
    var state = req.query.state.charAt(0).toUpperCase() + req.query.state.slice(1).toLowerCase();
    axios("https://api.covid19india.org/data.json")
    .then(function(response){
        res.render("state.ejs",{data : response.data,state : state});
    })
});

// app.get("/India/:state",function(req,res){
    
// });
    
app.listen(PORT,function(){
    console.log("Hello!! server is working!!");
});