const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
	username: { type: String }, // WEBSITE
	loweruser: { type: String }, // WEBSITE
	userID: { type: String }, // WEBSITE
	discTag: { type: String }, // DISCORD
	discID: { type: String }, // DISCORD
	verified: { type: Boolean }, // DISCORD - WEBSITE
	cmdsRan: { type: Number },
	lastCmd: { type: Date },
	email: { type: String }, // WEBSITE
	ePassword: { type: String }, // WEBSITE
	hPassword: { type: String },
	UUID: { type: String }, // WEBSITE
	dateCreate: { type: Date }, // WEBSITE
	cmdSpam: { type: Number } // DISCORD
});
userSchema.pre('save', function(next) {
	var user = this;

	// only hash the password if it has been modified (or is new)
	if (!user.isModified('hPassword')) return next();

	// generate a salt
	bcrypt.genSalt(process.env.saltFactor, function(err, salt) {
		if (err) return next(err);

		// hash the password using our new salt
		bcrypt.hash(user.hPassword, salt, function(err, hash) {
			if (err) return next(err);

			// override the cleartext password with the hashed one
			user.hPassword = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = async function(candidatePassword) {
	return await bcrypt.compare(candidatePassword, this.hPassword);
};

module.exports = mongoose.model('user', userSchema);
