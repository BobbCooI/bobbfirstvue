const express = require("express");
const router = express.Router();
const users = require("../db/models/Person.js");
const genID = require("../utils/authkey.js");
const Stats = require('../db/models/Stats.js');
console.log(genID());
const email = require("../utils/mailer.js");
router.post('/auth', async (req, res) => {
    await Stats.updateOne({_id: "60070be0f12d9e041931de68"}, {$inc: {webRequests: 1}});
    const keys = Object.keys(req.body);
    const values = Object.values(req.body);
  //  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (values[3] === "Register") {
   await users
      .create({
        username: req.body.pUsername,
        loweruser: req.body.pUsername.toLowerCase(),
        email: req.body.pEmail,
        password: req.body.pPassword,
        UUID: genID(),
     verified: false,
        dateCreate: new Date()
      })
      .catch(e => console.log(e));
    
    await email(req.body.pEmail, "Registration", "Thanks for resgistering bruv").catch(e => console.log(e));
return res.redirect('https://vuehj23nso.glitch.me')

  } else if (keys.includes("usernameCheck")) {
    const user = req.body.pUsername;
    let pos = await users.findOne({ loweruser: user.toLowerCase() });
    let bool = pos ? true : false;
    return res.json({ exists: bool });
  } else if (keys.includes("loginCreds")) {
    const user = req.body.pUsername;
    const pass = req.body.pPassword;
    let pos = await users.findOne({
      loweruser: user.toLowerCase(),
      password: pass
    });
    let bool = pos ? true : false;
 
    return res.json({ exists: bool })
  }
            })
module.exports = router;