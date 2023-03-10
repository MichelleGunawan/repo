const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema({
	owner: 
		{
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'User'
		}
	,
    promptText: {
		type: String,
		required: true,
		trim: true,
	},
	photos: [
		{
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'Photos'
		}
	],

})

const Prompt = mongoose.model("Prompts", promptSchema);
module.exports = Prompt;