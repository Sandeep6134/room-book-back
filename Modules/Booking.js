
const mongo=require('../connect')

//Get a data from the data base
module.exports.product=async(req,res,next)=>{

    try {
        console.log("yes")
        var data = await mongo.db.collection("Rooms").find().toArray();
        console.log("ENd")
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

//seats check need to be configured
module.exports.seats=async(req,res,next)=>{
    res.send("Available seats check suceessful");
}


//insert a data as collection (POST)
module.exports.posting=async(req,res,next)=>{
    try {
        console.log("data updatedd");
        var data = await mongo.db.collection("Rooms").insert(req.body);
        res.send(data);
        next();
        // console.log(this.db)
        
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}


module.exports.getbookedRooms=async(req,res,next)=>{

    try {
        var data = await mongo.db.collection("Rooms").findAll({bookingId:1}).toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}
