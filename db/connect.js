const mongoose = require('mongoose')


const connectionString =
'mongodb+srv://sodus:sodus-pass_40@cluster0.1ievu.mongodb.net/TASK_MANAGER?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = (url) => {
  return mongoose.connect (connectionString, {
     //useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false, 
     //useUnifiedTopology: true,

  })
}
 
module.exports = connectDB




/* mongoose
 .connect(connectionString, {
     useNewUrlParser: true,
     useCreateIndex: true,
     useFindAndModify: false, 
     useUnifiedTopology: true, 
 })
 .then(() => console.log('CONNECTED TO THE DB...'))
 .catch((err) => console.log(err))
 */






/*const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://sodus:<db_password>@cluster0.1ievu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); */