const mongoose=require("mongoose");

//DB connection
const mongoURL='mongodb://localhost:27017/mydatabase';
mongoose.connect(mongoURL);
// obj representing Mongodb connection
const db=mongoose.connection;

// event listeners
db.on('connected',()=>{
    console.log('Connected to mongoDB server');
});

db.on('error',()=>{
    console.log("Mongodb connection error");
});

db.on('disconnected',()=>{
    console.log("Mongodb server is disconnected");
});
module.exports= db;


