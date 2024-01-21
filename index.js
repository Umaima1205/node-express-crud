const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const app = express();
app.use(express.json());


//db url
const DbUrl = "mongodb+srv://umaimayousuf1205:icL7bHw9wBM5w4qV@cluster0.vkla3pl.mongodb.net/?retryWrites=true&w=majority";

const port = 3000;

//db connected
mongoose
.connect(DbUrl)
.then(() => console.log("Database connected...."))
.catch((err) => console.log(err));


// finding users
app.get('/' , async(req , res) => {
    try{
        const users = await User.find();
        res.json(users);
    }
    catch (error){
        console.log("users"), res.send("Something went wrong....");
    }
});


//posting users
app.post('/' , async(req , res) => {
    try{
        const users = await User.create(req.body);
        res.json(users);
    }
    catch (error){
        console.log("users"), res.send("Something went wrong....");
    }
});


//listening to port
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
