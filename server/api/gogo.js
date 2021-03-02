const { gogoScrap } = require('../utils/scrapers.js');

const express = require('express');
const router = express.Router();
const Stats = require('../db/models/Stats.js');
router.post('/gogo', async (req, res) => {
try {
		let link = await gogoScrap(req.body.gg)
if(link) return res.send({success: true, link})
} catch(e) {
  return res.send({success: false, error: e})
}
	});
module.exports = router;
