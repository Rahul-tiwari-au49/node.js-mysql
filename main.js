var express = require("express")
var mysql = require("mysql")
var app = express()
app.use(express.json())

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'newdb'
})

con.connect((err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log("conneted !!")
    }
})

app.post('/post',(req,res)=>{
    const name=req.body.name;
    const id=req.body.id;
    const mark=req.body.mark;

    con.query('insert into mytable values(?,?,?)',[id,name,mark],(err,result)=>{
        if(err)
        {
            console.log(err)
        }else{
            res.send("POSTED")
        }
    })
})
app.listen(8000,(err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log("on port 8000")
    }
})