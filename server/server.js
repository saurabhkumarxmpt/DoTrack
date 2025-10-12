require('dotenv').config();
const express=require('express');
const port=process.env.PORT || 5000;
const database=require('./config/database');
const app=express();
const authRoute=require('./routes/authRoutes');


app.use(express.json());
app.use('/auth',authRoute);
database();
app.get('/',(req,res)=>{
    res.json({message:"this is the server"});
});

app.listen(port,(err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.info('server is ok');
    }
});