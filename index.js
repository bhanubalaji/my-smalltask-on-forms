var express =require("express")
var cors =require("cors")
var bodyParser =require("body-parser")
var mongoose =require("mongoose")
mongoose.set('strictQuery', true);
var path =require("path")
var app = express();
var ObjectID = require('mongodb').ObjectId

app.use (cors({
    credentials:true,
    origin:["http://localhost:4200"]
      
  }));
  console.log(" ok")
  app.use ("*",(req, res, next) =>{
    res.header("Access-Conssstrol-Allow-Orgin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PATCH< DELETE" );
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // console.log("cores ok")
    next();
  })
  
// app.use(express.static("upload"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))  
  
  mongoose.connect('mongodb://127.0.0.1:27017/bhanu',{
      useNewUrlParser: true,
      useUnifiedTopology: true
  },{poolSize: 10});
  var db = mongoose.connection;
   db.on('error',()=>console.log("error in connecting database"));
   db.once('open',()=>console.log("Connected to Database"))
   db.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
  


  

console.log("okk")
   app.get('/api/getallmydatatoclient', async (req, res) => {
    console.log("hiiiiii")
    
    try {
      const mydata = await db.collection('clientdata').find().toArray();
      res.status(200).json({ success: true, mydata });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });


  app.get("/api/alldata",async(req,res)=>{
    // console.log("of")
    // console.log(req.body)
    // console.log(req.body.Name)
    var mydata = await db.collection("clientdata").find().toArray()
    // console.log(mydata)
// if(mydata.acknowledged=true){
res.send({mydata})

   })



 
  app.post("/api/submitdata",async(req,res)=>{
    console.log("of")
    console.log(req.body)
     
    var mydata = await db.collection("clientdata").insertOne(req.body)
    console.log(mydata)
if(mydata.acknowledged=true){
res.send({result:true})
}
   })

   


  app.post("/api/mydata",async(req,res)=>{
    console.log("of")
    console.log(req.body)
    console.log(req.body.Name)
    var mydata = await db.collection("userdata").insertOne(req.body)
    console.log(mydata)
if(mydata.acknowledged=true){
res.send({result:true})
}
   })


   app.get("/api/deletealldata",async(req,res)=>{
    
    var mydata = await db.collection("clientdata").deleteMany({})
     console.log(mydata)

res.send({result:true})
   })


  

  //  app.get("/api/getallmydatatoclient",async (req,res)=>{
  //   console.log("lki")
  //   var mydata = await db.collection("clientdata").find().toArray()
  //    console.log(mydata)
  //    res.json({mydata})
  //  })


   app.post("/api/deleteonedata",async(req,res)=>{ 
    console.log(req.body._id)

    const objectId = new ObjectID(`${req.body._id}`);
    console.log(objectId)
    var mydata = await db.collection("clientdata").deleteOne({_id:objectId})
    console.log(mydata)
    res.send({result:true})
   })



  
  
  
app.use(express.static(path.join(__dirname,'dist/smalltask')));
   app.get('*', (req, res) => {
    res.sendFile('index.html', {root: 'dist/smalltask'});
   })
  
  
  
  // app.get('/entry', (req, res) => {
  //   console.log("entter")
  //   res.sendFile('index.html', {root: 'dist/Frontend'});
  // });


  app.listen(7000,()=>{
    console.log("listen by http://localhost:7000")
    })
  