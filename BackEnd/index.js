const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/User");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb://127.0.0.1:27017/cookpal");

app.post("/register", (req, res) => {
  let { name, email, password } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      UserModel.create({
        name,
        email,
        password: hash,
      })
        .then((users) => {
          let token = jwt.sign({ email: email }, "SECRET_KEY");
          res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000,
          });
          res.json(users);
        })
        .catch((err) => res.json(err));
    });
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          let token = jwt.sign({ email: email }, "SECRET_KEY");
          res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000,
          });
          res.json("Success");
        } else {
          res.json("Incorrect Email or Password");
        }
      });
    } else {
      res.json("User doesn't exist");
    }
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 1,
    expires: new Date(0),
    path: "/", 
  });

  res.clearCookie("token", {
    path: "/",
    domain: "localhost",
  });
  res.json({ success: true, message: "Logged out successfully" });
});


app.listen(3001, () => {
  console.log("Server is running");
});


