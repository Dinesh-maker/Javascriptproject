

const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT || 3000;

const templatepath=path.join(__dirname,"../PROJECT1/views");



app.set("view engine","hbs");
app.set("views",templatepath);
 app.use(express.static(path.join(__dirname,"../PROJECT1/public/images")));

//console.log(process.env.SECRET_KEY);


app.get("/tictoctoegame",(req,res)=>{
  res.render("tictoctoegame");
});
app.get("/bulbproject",(req,res)=>{
    res.render("bulbproject");
  });
  app.get("/calculator",(req,res)=>{
    res.render("calculator");
  });
  app.get("/formvalidation",(req,res)=>{
    res.render("formvalidation");
  });
  app.get("/countdowntimer",(req,res)=>{
    res.render("countdowntimer");
  });
  app.get("/counter",(req,res)=>{
    res.render("counter");
  });
  app.get("/imageslider",(req,res)=>{
    res.render("imageslider");
  });
  app.get("/myntraclone",(req,res)=>{
    res.render("myntraclone");
  });
  app.get("/project1",(req,res)=>{
    res.render("project1");
  });
  app.get("/project2",(req,res)=>{
    res.render("project2");
  });
  app.get("/quiz",(req,res)=>{
    res.render("quiz");
  });
  app.get("/starrating",(req,res)=>{
    res.render("starrating");
  });
  app.get("/stopwatch",(req,res)=>{
    res.render("stopwatch");
  });
  app.get("/todolist",(req,res)=>{
    res.render("todolist");
  });
  app.get("/welcomepage",(req,res)=>{
    res.render("welcomepage");
  });
app.listen(port,()=>{
    console.log(`server is connected at ${port}...`);
})
