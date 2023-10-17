const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.get('/home',(req,res)=>{
    res.json({message:'OK'});
})
app.listen(process.env.PORT,()=>{
    console.log('server is up in the port : ',process.env.PORT);
});