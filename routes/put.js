var express = require('express');
const Joi=require('joi');

var router = express.Router();

const userData = require('../UserData');

router.put('/',(req,res)=>{
  const result=validatePutUser(req.body);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const user= userData.find(u => u.uid=== parseInt(req.body.uid));
  if(!user)
  {
    res.send("user not found");
  }

  user.username=req.body.username;
  user.email=req.body.email;
  res.send(user);

});

function validatePutUser(user)
{
  const schema={
    uid:Joi.number().min(1).required(),
    username:Joi.string().min(1).required(),
    email:Joi.string().min(1).required()
  };

  return Joi.validate(user,schema);
}

module.exports = router;
