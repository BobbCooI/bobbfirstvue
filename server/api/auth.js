const express = require("express");
const router = express.Router();
const users = require("../../db/models/Person.js");
const genID = require("../utils/authkey.js");
console.log(genID());
const email = require("../utils/mailer.js");
router.post('/auth', async (req, res) => {
  console.log(req.body);
  let keys = Object.keys(req.body);
  if (keys.includes("pEmail")) {
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
    
    //await email(req.body.pEmail, "Registration", "Thanks for resgistering bruv").catch(e => console.log(e));
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