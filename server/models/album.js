const mongoose = require("mongoose");
const photo = require('./photo')

const albumSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		public: {
			type: Boolean,
			required: true,
            default: true,
		},
		pinned: {
			type: Boolean,
			required: true,
            default: false,
		},
		thumbnail: {
			type: String, //TODO: Jason implement photo blob/GridFS
			required: false,
		},
		description: {
			type: String,
			required: false,
		},
		owners: [
			{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'Users'
			}
		],
		followers: [
			{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'Users'
			}
		],
		tags: [
			{
				type: String, 
			}
		],
		photos: [
			{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'Photos'
			}
		],
		reactions: [{
			userID: { type: mongoose.Schema.Types.ObjectId, 
				ref: 'Users' },
			userReaction: { type: mongoose.Schema.Types.ObjectId, 
				ref: 'Photos' }
		  }],
		
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Albums", albumSchema);