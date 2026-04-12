import express from "express"

const app = express()


app.get("/" , (req, res)=>{
    res.send("server is running");
})

const PORT = 8082;

app.listen(PORT , "0.0.0.0" , ()=>{
    console.log("server has started running at port " +  PORT)
})

