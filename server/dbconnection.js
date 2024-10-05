const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://moujanemarwane:marwane123@cluster0.zoyjzcp.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
module.exports.client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
