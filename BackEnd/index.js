const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel=require("./models/User")


const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/cookpal");

app.post("/register",(req,res)=>{
    let {name,email,password}=req.body;
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt, (err,hash)=>{
            UserModel.create({
                name,email,password:hash
            })
            .then(users=>res.json(users))
            .catch(err=>res.json(err))
        })
    })

})

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
            bcrypt.compare(password, user.password, function (err, result){
                if(result)
                {res.json("Success")}
                else{
                    res.json("Incorrect Email or Password")
                }
            })
           
        }
        else{
            res.json("User doesn't exist")
        }
    })
})

// Assuming 'dp' is the profile picture path in the user schema.


app.listen(3001,()=>{
    console.log("Server is running")
})