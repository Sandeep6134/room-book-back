
const mongo=require('../connect')

module.exports.createCustomer=async(req,res,next)=>{
    try {
        console.log("User data inserted");
        var end= await  mongo.db.collection("room").findOne({roomId:req.body.roomId});
        // console.log(end.bookingStatus)

            

        if(end.bookingStatus==0){
        var data = await mongo.db.collection("customer").insertOne(req.body);
            // console.log("yes");
       var a= await mongo.db.collection("Room").updateOne({roomId:req.body.roomId}, { $set: {bookingStatus:1} })
        
           res.send(data)
        
        }else{
        res.send("Room not available")
        }
    
// console.log(end)

        next();
        // console.log(this.db)
        
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}


//List the data
