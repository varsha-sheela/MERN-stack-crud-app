let express=require("express");
let mongodb=require("mongodb");
let cors=require("cors");
let varsha=mongodb.MongoClient;
let app=express();
app.use(cors());
app.get("/products",(req,res)=>{
varsha.connect("mongodb://localhost:27017/mern",(err,db)=>{
db.collection("products").find().toArray((err,array)=>{
if(err)
throw err;
else
res.send(array);
});
});
});
app.listen(8080);
console.log("server started");