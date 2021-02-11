const express = require("express");
const router = express.Router();
const Stats = require("../db/models/Stats.js");
router.post('/visits', async (req, res) => {
  await Stats.updateOne({_id: "60070be0f12d9e041931de68"}, {$inc: {webRequests: 1}});
  if(req.body["increment"]) {
  await Stats.updateOne(
    { _id: "60070be0f12d9e041931de68" },
    { $inc: { websiteVisits: 1 } }
  );
  return res.json({successful: true})
  } else if(req.body["getVisits"]) {
    let visitCount = await Stats.findOne({ _id: "60070be0f12d9e041931de68" });
    return res.json({visitCount: visitCount.websiteVisits});
  }
})

module.exports = router;