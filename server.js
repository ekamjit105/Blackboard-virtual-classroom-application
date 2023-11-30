const express = require('express')
const morgan = require('morgan')

const app = express()

const dotenv = require('dotenv')
dotenv.config()

const connectDB = require('./configure') 
connectDB()



const path = require('path')


//middleware
app.use(express.json())
app.use(morgan('dev'))

app.use("/api/users",require("./routes/userRoute"));
app.use("/api/classes",require("./routes/classRoute"));
app.use("/api/posts",require("./routes/postRoute"));
app.use("/api/submissions",require("./routes/submissionRoute"));
app.use("/api/mail",require("./routes/mailerRoute"));
//app.use("/api/submissions",require("./routes/submissionRoute"));



//static files
app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',function(req,res){
res.sendFile(path.join(__dirname,"./client/build/index.html"))
});

//PORT
app.listen(8080,()=>(
    console.log("server running on port 8080")
))

app.get('/',(req,res)=>(
    res.send("<h1>Hello from server<h1>")
))
