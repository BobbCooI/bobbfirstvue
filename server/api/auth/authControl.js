const User = require('../../db/models/Person.js');
const authKey = require('../../utils/authkey.js');
const Stats = require('../../db/models/Stats.js');
const genID = require('../../utils/authkey.js');
const utils = require('../../utils/utils.js');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
function jwtSignUser(user) {
	const ONE_WEEK = 60 * 60 * 24 * 7;
	return jwt.sign(user, 'secret', {
		expiresIn: ONE_WEEK
	});
}
module.exports = {
	async register(req, res) {
		await Stats.updateOne(
			{ _id: '60070be0f12d9e041931de68' },
			{ $inc: { webRequests: 1 } }
		);

		const { pUsername } = req.body;
		const userCheck = await User.findOne({
			loweruser: pUsername.toLowerCase()
		});
		if (userCheck)
			return res
				.status(403)
				.send({ error: 'This username is already in use.' });

		const email = req.body.pEmail;
		const emailCheck = await User.findOne({
			email
		});
		if (emailCheck)
			return res
				.status(403)
				.send({ error: 'This email account is already in use.' });
		let origPass = req.body.pPassword
			? utils.decode64(req.body.pPassword).toString()
			: res.status(403).send({ error: 'Password is needed.' }); // get Original Pass
		let iD;
		let ePassword = CryptoJS.AES.encrypt(
			origPass,
			process.env.encryptWord
		).toString(); // Encrypt
		do {
			iD = utils.makeID(8);
		} while (await User.findOne({ userID: iD }));

		const user = await User.create({
			username: req.body.pUsername,
			loweruser: req.body.pUsername.toLowerCase(),
			userID: iD,
			email: req.body.pEmail,
			ePassword,
			hPassword: origPass,
			UUID: genID(),
			verified: false,
			dateCreate: new Date()
		});
		await Stats.findOneAndUpdate(
			{ _id: '60070be0f12d9e041931de68' },
			{ $inc: { usersCreated: 1 } },
			{ new: true }
		);

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
			const { pUsername } = req.body;
			// to Decrypt --		let password = req.body.pPassword ? CryptoJS.AES.decrypt(utils.decode64(req.body.pPassword), process.env.encryptWord).toString(CryptoJS.enc.Utf8) : res.status(403).send({error: "Password is needed."});
			let password = req.body.pPassword
				? utils.decode64(req.body.pPassword).toString()
				: res.status(403).send({ error: 'Password is needed.' }); // get Original Pass
			const ePassword = CryptoJS.AES.encrypt(
				password,
				process.env.encryptWord
			).toString(); // Encrypt then encode

			const user = await User.findOne({
				loweruser: pUsername.toLowerCase()
			}).catch(e => console.log(e));

			// test a matching password
			const isPassCorrect = await user
				.comparePassword(password)
				.catch(e => console.log(e));
			if (!user && !isPassCorrect) {
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
			console.log(err);
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
		if (posib) {
			return res.status(403).send({ error: 'The username is already taken.' });
		} else {
			return res.send({ good: true });
		}
	}
};
