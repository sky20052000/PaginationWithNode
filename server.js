const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

// db connection 
mongoose.connect("mongodb://localhost:27017/Pagination").then((data)=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log("No connection");
});
 
// configaration
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());

// set routes here 
app.use("/api/users", userRoutes)

const port = 8001; 
app.listen(port,()=>{
    console.log(`server listnening on the: http://localhost:${port}`);
});