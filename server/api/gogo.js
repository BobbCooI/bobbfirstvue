const { gogoScrap } = require('../utils/scrapers/gogo.js');
const utils = require('../utils/utils.js');
const express = require('express');
const router = express.Router();
const Stats = require('../db/models/Stats.js');
const axios = require('axios');
router.post('/gogo', async (req, res) => {
	console.log(req.body);
	if (req.body.gg) {
		try {
			let link = await gogoScrap(req.body.gg);
			if (link) return res.send({ success: true, link });
		} catch (e) {
			return res.send({ success: false, error: e });
		}
	} else if (req.body.bb) {
		try {
			/*	const search = await axios.get(
				`https://ajax.gogocdn.net/site/loadAjaxSearch?keyword=${utils.decode64(
						req.body.bb=="Black Clover"?"Black Clover TV":req.body.bb
					)}`,
			).catch(e => console.log(e));*/

			const parsed = `https://gogo-play.net/videos/${utils.slugify(
				utils.decode64(req.body.bb) === 'Black Clover'
					? 'Black Clover TV'
					: utils.decode64(req.body.bb)
			)}-episode-${utils.slugify(req.body.ep)}`;
			console.log(parsed);
			let link = await gogoScrap(parsed);
			console.log(utils.encode64(link.main), link.main);
			if (link)
				return res.send({
					success: true,
					main: utils.encode64(link.main),
					other: link.other
				});
		} catch (e) {
			console.log(e);
			return res.send({
				success: false,
				error: 'There was an error fetching that episode.'
			});
		}
	} else {
		return res.send('why are you here');
	}
});
module.exports = router;
