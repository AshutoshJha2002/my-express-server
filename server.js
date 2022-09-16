const express = require('express');
const app = express();
app.get("/",function(req,res){
  res.send("<em>How are you</em>");
})
app.get("/contact",function(req,res){
  res.send("cotact me at:aj@gmail.com");
})
app.get("/about",function(req,res){
  res.send("I am a professional coder.");
})
app.listen(3000,function(){
  console.log("Server started at port 3000");
})
