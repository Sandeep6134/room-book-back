// const {MongoClient} = require('mongodb');

const booking=require("./Routers/router")
const mongo=require("./connect")
const express=require("express")
const { connect } = require("./connect")
const app=express()
app.use(express.json())



// console.log(mongo);


mongo.connect();
console.log(connect())

// console.log(a)

app.use("/booking",booking)

//listof all booked room
app.get("/room/list",async(req,res,next)=>{

    try {
        var data = await mongo.db.collection("Rooms").find({bookingStatus:1}).toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
})

app.get("/room/allList",async(req,res,next)=>{

    try {
        var data = await mongo.db.collection("Rooms").find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
})



app.get("/users", function(req,res,next){
    res.send("server starts");
})

const port = process.env.PORT || 3001
app.listen(port, function(){
    console.log("connected")
})