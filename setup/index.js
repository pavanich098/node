
const express=require("express")
const app=express()
const employees=require("./employeelist")
const cors=require("cors")
const bodyParser=require("body-parser")
//console.log(employees)

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hii")
}) 
app.get("/bring",(req,res)=>{
    res.send("hii")
}) 
app.get("/add",(req,res)=>{
    res.send("hello")
}) 
app.get("/emp",(req,res)=>{
    res.json(employees )
})
app.post("/store-employee",(req,res)=>{
    const {username,password}=req.body
    console.log(username,password)
})
app.listen(5000,()=>console.log("server started successfully"))