const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 8000;
// use express.json 
app.use(express.json());

// define root  

app.get("/",(req, res)=>{
    res.send("home page")
})

// create 
app.post("/students",(req,res)=>{
    console.log(req.body);    
    const user = new Student(req.body);
    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{
        res.send(e);
    })

    // res.send("hello from the other side.");
})

app.listen(port, ()=>{
    console.log(`connecting port ${port}`)
});

// You DO NOT NEED express.json() and express.urlencoded()
// for GET Requests or DELETE Requests. We only need it for 
// post and put req.

// express.json() isa method inbuilt in express to recognize the 
// incomming Request Object as a JSON object. 
// This method is called as a middleware in your application using
// the code: app.use(express.json());