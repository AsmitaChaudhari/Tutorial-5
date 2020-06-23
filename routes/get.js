var express = require('express');
var router = express.Router();

const userData = require('../UserData');

/* GET users listing. */
router.get('/', function(req, res, next) {
console.log(userData);
  res.send(userData);
});

router.get('/:id',(req,res)=>{
  const user= userData.find(u => u.uid === parseInt(req.params.id));

  if(!user)
  {
    return res.send("user not exist.");
  } 
  console.log(user);
  res.send(user);
});

module.exports = router;
