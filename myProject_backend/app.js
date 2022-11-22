const express=require('express');
const db=require('./config/connection')
const app=express();
const port=3000;
const bodyParser = require( 'body-parser' );

const PostModel=require('./models/post')
const UserModel=require('./models/user')
const router=require('./routes/routing')
// app.get('/',(req,res)=>{
//     res.send("hello")
// })
app.use( bodyParser.json() );

app.use('/',router)

const initApp=async ()=>{
    console.log("testing db connection...");
    try{
        await db.authenticate();
        console.log("Connection has been established successfully.");

        PostModel.sync();
        UserModel.sync()

        app.listen(port,()=>{
            console.log("listening at "+port);
        })
        
    } catch(err){
        console.log("Unable to connect : ",err.original);
    }
}

initApp();