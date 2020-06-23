const express = require("express");
const Joi = require("joi");
const router = express.Router();

const userData = require("../UserData");

router.post("/", (req, res) => {
  const result = validatePostUser(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const user = {
    uid: userData.length + 1,
    username: req.body.username,
    email: req.body.email,
  };
  userData.push(user);
  res.send(user);
});

function validatePostUser(user) {
  const schema = {
    username: Joi.string().min(1).required(),
    email: Joi.string().min(1).required(),
  };

  return Joi.validate(user, schema);
}

module.exports = router;
