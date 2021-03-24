const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://Sheetal:Deopurkar123@cluster0.xnmpy.mongodb.net/ProductDB?retryWrites=true&w=majority";

const client = new MongoClient(url, {
  name: String,
  price: Number,
});

client.connect();
