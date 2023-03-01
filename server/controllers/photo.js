const Photo = require("../models/photo");

exports.addPhoto = async (req, res) => {
	const photo = new Photo(req.body);
	await photo.save();

	res.status(201).json({
		message: "Photo Save Successful!",
        photo
	});
};

exports.deletePhoto = async (req, res) => {
	await Photo.deleteOne({ "photo": req.body.photo});

	res.status(201).json({
		message: "Photo Delete Successful!"
	});
};

exports.editCaption = async (req, res) => {

	const photo = await Photo.findOne({ "photo": req.body.photo});
	if (photo == null) {
        res.status(404).json({ message: "No Photo Found" })
        return
    }
	photo.caption = req.body.caption;
	photo.save();

	res.status(201).json({
		//message: ""
		photo
	});
};

exports.addTags = async (req, res) => {
	const photo = await Photo.findOne({ "photo": req.body.photo});
	if (photo == null) {
        res.status(404).json({ message: "No Photo Found" })
        return
    }
	for(i=0; i<req.body.tags.length; i++){
		photo.tags.push(req.body.tags[i]);
	}
	photo.save();

	res.status(201).json({
		//message: ""
		photo
	});
};

exports.deleteTags = async (req, res) => {
	const photo = await Photo.findOne({ "photo": req.body.photo});
	if (photo == null) {
        res.status(404).json({ message: "No Photo Found" })
        return
    }
	console.log("here")
	await Photo.updateOne( { _id: photo }, { $pullAll: { tags: req.body.tags } } )
	photo.save();

	res.status(201).json({
		message: "Tags removed successfully!"
	});
};