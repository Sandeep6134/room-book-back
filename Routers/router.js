var express= require("express");
// const { MongoGridFSChunkError } = require("mongodb");
var router= express.Router();

const room=require("../Modules/Booking")
const customer=require("../Modules/Customer")

module.exports= router.get('/get',room.product)
module.exports=router.get('/availableseats',room.seats)
module.exports=router.post('/postdata',room.posting)


module.exports=router.post('/postuser',customer.createCustomer)
