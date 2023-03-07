const User = require("../models/user");
const Album = require("../models/album");
const jwt = require("jsonwebtoken");
const asyncHandler = require('express-async-handler');
const Prompt = require("../models/prompt");
require("dotenv").config();

exports.register = async (req, res) => {
	// check if user already exists
	const usernameExists = await User.findOne({
		username: req.body.username,
	});
	const emailExists = await User.findOne({
		email: req.body.email,
	});

	if (usernameExists) {
		return res.status(403).json({
			error: "Username is taken",
		});
	}
	if (emailExists) {
		return res.status(403).json({
			error: "Email is taken",
		});
	}

	// if new user, create a new user
	const user = new User(req.body);

	//create the allPhotos album for the user
	const album = new Album({ "name": "All"});
	await album.save();

	user.allPhotos = album;
	await user.save();

	res.status(201).json({
		//message: "Signup Successful! Please Login to proceed",
		user
	});
};

exports.login = async (req, res) => {
	// find the user based on email
	const { email, password } = req.body;

	await User.findOne({ email }).exec((err, user) => {
		// if err or no user
		if (err || !user) {
			return res.status(401).json({
				error: "Invalid Credentials",
			});
		}

		// if user is found, we use the authenticate method from the model
		if (!user.authenticate(password)) {
			return res.status(401).json({
				error: "Invalid email or password",
			});
		}

		// generate a token with user id and jwt secret
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "24h",
		});

		// persist the token as 'jwt' in cookie with an expiry date
		res.cookie("jwt", token, { expire: new Date() + 9999, httpOnly: true });

		// return the response with user
		const { username } = user;
		return res.json({
			message: "Login Successful!",
			username,
			token
		});
	});
};

exports.logout = (req, res) => {
	// clear the cookie
	res.clearCookie("jwt");

	return res.json({
		message: "Logout Successful!",
	});
};

exports.getLoggedInUser = (req, res) => {
	const { username } = req.user;

	return res.status(200).json({
		message: "User is still logged in",
		username,
	});
};


// /api/user?search
exports.allUsers = asyncHandler(async (req, res) => {
	const keyword = req.query.search?{
		$or:[
			{username: {$regex: req.query.search, $options: "i"}},
		]
	}:
	{}

	const users = await User.find(keyword);//.find({_id:{$ne: req.user._id}});
	res.send(users);
});

exports.addPrompt = async (req, res) => { 
    const user = await User.findOne({"username": req.body.username});
	if(user == null){
		res.status(404).json({ message: "User not found" })
		return
	}

	if (user.prompts != null && user.prompts.length >= 7) {
		res.status(404).json({ message: "User already has 7 prompts" })
		return
	}
	
	const newPrompt = await Prompt.create({
		"promptText": req.body.promptText,
		"owner": user,
	})
	user.prompts.push(newPrompt);
	await user.save();

    res.status(200).json(user.prompts);
};

exports.deletePrompt = async (req, res) => { 
    const user = await User.findOne({"username": req.body.username});
	if(user == null){
		res.status(404).json({ message: "User not found" })
		return
	}

	if (user.prompts == null) {
		res.status(404).json({ message: "User has no prompts" })
		return
	}

	//find the prompt to delete, delete the user pointer, then delete the prompt
	const promptToDelete = await Prompt.findOne({owner: user, promptText: req.body.promptText })
	if(promptToDelete == null){
		res.status(404).json({ message: "No such prompt exists to delete" })
		return
	}
	const index = user.prompts.indexOf(promptToDelete._id);
	user.prompts.splice(index, 1);
	await user.save();
	
	await Prompt.deleteOne({owner: user, promptText: req.body.promptText })
    res.status(200).json(user.prompts);
};

exports.addPhotoToPrompt = async (req, res) => { 
	const user = await User.findOne({"username": req.body.username});
	if(user == null){
		res.status(404).json({ message: "User not found" })
		return
	}

    const prompt = await Prompt.findOne({owner: user, promptText: req.body.promptText });
	if(prompt.photos.length >=5){
		res.status(404).json({ message: "already 5 photos in this prompt" })
		return
	}
	prompt.photos.push(req.body.photoObjectID);
	await prompt.save();

    res.status(200).json(prompt.photos);
};

exports.deletePhotoFromPrompt = async (req, res) => { 
	const user = await User.findOne({"username": req.body.username});
	if(user == null){
		res.status(404).json({ message: "User not found" })
		return
	}
    const prompt = await Prompt.findOne({owner: user, promptText: req.body.promptText });
	if(prompt == null){
		res.status(404).json({ message: "Prompt not found" })
		return
	}
	const index = prompt.photos.indexOf(req.body.photoObjectID);
	console.log(index)
	prompt.photos.splice(index, 1);
	await prompt.save();

    res.status(200).json(prompt.photos);
};