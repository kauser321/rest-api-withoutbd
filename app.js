const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const app=express();
const userRouter=require("./routes/user.route")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
// This is all user routing
app.use("/users",userRouter)
// This is home route
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
});
// This is unknown route searching error 
app.use((req,res,next)=>{
    res.status(404).json({
        massaze:'route not found',
    });
    // This is server error
    app.use((err,req,res,next)=>{
        res.status(500).json({
            msg:"somthing brock"
        })
    })
})
module.exports=app;