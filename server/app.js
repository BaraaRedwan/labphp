const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
//get
app.get('/user',(req,res)=>{//'http://localhost:3000/user?name=baraa'
    res.json({message:'Hello '+req.param('name ')});
})
//post
app.post('/user',(req,res)=>{
    const data = {"message" :"hello baraa , I'm post method"};
    const body = req.body;
    const p = Object.assign(data,body);
    res.json(p);   
})
app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

