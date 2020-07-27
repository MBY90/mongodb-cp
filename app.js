const  mongoose = require('mongoose');

const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const personRouter=require('./router/router');
require('dotenv/config');
app.use(bodyparser.json());
app.use('/person',personRouter);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },()=>
console.log("server is runing"));
  
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
}
)
