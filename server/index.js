const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;


const schemaData = mongoose.Schema({
    name: String,
    email: String,
    age: String,
},{
    timestamps : true 
})

const userModel = mongoose.model('user',schemaData)

app.get("/",async(req,res) => {
    const data = await userModel.find ({})
    res.json({success : true , data : data})
})

app.post("/create",async(req,res)=>{
    console.log(req.body)
    const data = new userModel(req.body)
    await data.save()
    res.send({success : true, message : "duomenys išsaugoti sėkmingai", data : data})
})

app.put("/update",async(req,res)=>{
    console.log(req.body)
    const { _id,...rest} = req.body

    console.log(rest)
    const data = await userModel.updateOne({_id : _id},rest)
    res.send({success : true, message : "duomenys redaguoti sėkmingai", data : data})
})


app.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id
    console.log(id)
    const data = await userModel.deleteOne({_id : id})
    res.send({success : true, message : "duomenys ištrinti sėkmingai", data : data})
})


mongoose.connect("mongodb+srv://admin:admin@cluster0.rto7wdk.mongodb.net/registration")
.then(()=>{
    console.log("connect to DB")
    app.listen(PORT, ()=>console.log("Server is running"))
})
.catch((err)=>console.log(err))
