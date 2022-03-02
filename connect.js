const {MongoClient} =require("mongodb")
module.exports={
    db:null,
    async connect(){

        try{
        const connection=await MongoClient.connect("mongodb+srv://sand:sand@cluster0.qxxpm.mongodb.net?retryWrites=true&w=majority")
        this.db=connection.db("HotelRoom")
        console.log(this.db);
        
        }
        catch(err){
          
                console.log("error in db");
            }

        
    }
}



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://root:root@cluster0.qxxpm.mongodb.net?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const connection = client.db("HotelRoom");
//   // perform actions on the collection object
//   console.log(connection)
//   client.close();
// });
// module.exports=client;
