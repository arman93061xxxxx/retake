const express = require('express');
const app = express();

app.use(express.json());

app.post('/login',(req,res)=>{

const {email, password} = req.body;

if(!email){
  res.status(400).json({error: "Email cannot be empty"});
}

if(!password){
  res.status(400).json({error: "Password cannot be empty"});
}

res.status(200).json({message: "login successfully"});

})


app.listen(3000,()=>{
  console.log("server is running successfully on port 3000");
})

