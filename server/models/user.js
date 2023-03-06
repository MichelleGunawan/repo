const mongoose = require("mongoose");
const uuidv1 = require("uuidv1");
const crypto = require("crypto");
const album = require('./album')

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
		},
		hashedPassword: {
			type: String,
			required: true,
		},
		salt: String,

		//Profile Features
		profilePhoto: {
			type: String, //TODO: Jason implement photo blob/GridFS
			required: false,
		},
		userBio: {
			type: String, 
			required: false,
			trim: true,
		},
		allPhotos :{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'Albums'
		}
		,
		albums: [
			{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'Albums'
			}
		],

		//User Interactions
		followers: [
			{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'Users'
			}
		],
		following: [
			{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'Users'
			}
		],
		reactionsToAlbums: [
			{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'Albums'
			}
		],
		prompts: [{
			prompts: { type: String, 
			},
			albumIDs: { type: mongoose.Schema.Types.ObjectId, 
				ref: 'Albums' }
		}],
	},
	{
		timestamps: true,
	}
);

// virtual field
userSchema.virtual("password").set(function (password) {
	// create temp variable called _password
	this._password = password;

	// generate a timestamp, uuidv1 gives us the unix timestamp
	this.salt = uuidv1();

	// encrypt the password function call
	this.hashedPassword = this.encryptPassword(password);
});

// methods
userSchema.methods = {
	encryptPassword: function (password) {
		if (!password) return "";

		try {
			return crypto
				.createHmac("sha256", this.salt)
				.update(password)
				.digest("hex");
		} catch (err) {
			return "";
		}
	},
	authenticate: function (plainText) {
		return this.encryptPassword(plainText) === this.hashedPassword;
	},
};

//module.exports = mongoose.model("Users", userSchema);
const User = mongoose.model("User", userSchema);
module.exports = User;