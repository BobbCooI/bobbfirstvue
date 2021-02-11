const User = require('../../db/models/Person.js');
const authKey = require('../../utils/authkey.js');
const Stats = require('../../db/models/Stats.js');
const genID = require("../../utils/authkey.js");
const jwt = require("jsonwebtoken");
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, 'secret', {
    expiresIn: ONE_WEEK
  })
};
module.exports = {
	async register(req, res) {
		await Stats.updateOne(
			{ _id: '60070be0f12d9e041931de68' },
			{ $inc: { webRequests: 1 } }
		);

		const pUsername = req.body.pUsername;
		const userCheck = await User.findOne({
			loweruser: pUsername.toLowerCase()
		});
		if (userCheck)
			return res
				.status(403)
				.send({ error: 'This username is already in use.' });

		const email = req.body.pEmail;
		const emailCheck = await User.findOne({
			loweruser: pUsername.toLowerCase()
		});
		if (emailCheck)
			return res
				.status(403)
				.send({ error: 'This email account is already in use.' });

		const user = await User.create({
			username: req.body.pUsername,
			loweruser: req.body.pUsername.toLowerCase(),
			email: req.body.pEmail,
			password: req.body.pPassword,
			UUID: genID(),
			verified: false,
			dateCreate: new Date()
		});
		const userJson = user.toJSON();
		return res.send({
			userInfo: userJson,
			token: jwtSignUser(userJson)
		});
	},
	async login(req, res) {
		await Stats.updateOne(
			{ _id: '60070be0f12d9e041931de68' },
			{ $inc: { webRequests: 1 } }
		);

		try {
			const { pUsername, pPassword } = req.body;
			const user = await User.findOne({
				loweruser: pUsername.toLowerCase(),
				password: pPassword
			});

			if (!user) {
				return res.status(401).send({
					error: 'The login information was incorrect'
				});
			}
			const userJson = user.toJSON();
			return res.send({
				userInfo: userJson,
			  token: jwtSignUser(userJson)
			});
		} catch (err) {
			return res.status(500).send({
				error: 'An error has occured trying to log in'
			});
		}
	},

	async userCheck(req, res) {
		await Stats.updateOne(
			{ _id: '60070be0f12d9e041931de68' },
			{ $inc: { webRequests: 1 } }
		);

		const { pUsername } = req.body;

		const posib = await User.findOne({ loweruser: pUsername.toLowerCase() });
		if (posib) {return res.status(403).send({ error: 'The username is already taken.' })} else {
		  return res.send({good: true});
		}
	}
};
