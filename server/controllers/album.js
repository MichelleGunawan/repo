const Album = require("../models/album");
const Photo = require("../models/photo");

exports.addAlbum = async (req, res) => {
	// check if album already exists
	const albumNameExists = await Album.findOne({
		name: req.body.name,
	});

	if (albumNameExists) {
		return res.status(403).json({
			error: "Album name is taken",
		});
	}

	// else create a new album
	const album = new Album(req.body);
	await album.save();

	res.status(201).json({
		message: "Album Creation Successful!",
	});
};

exports.addPhotos = async (req, res) => {

    const album = await Album.findOne({ "name": req.body.name})
    if (album == null) {
        res.status(404).json({ message: "No Album Found" })
        return
    }

    const photosToAdd = req.body.photos;
    for(i=0; i<photosToAdd.length; i++){
        const nextPhoto = await Photo.findOne({ "photo": photosToAdd[i]})
        if (nextPhoto == null) {
            res.status(404).json({ message: "No Photo Found" })
            return
        }
        album.photos.push(nextPhoto)
    }
    album.save();

    res.status(201).json({
		//message: "Added photos successfully!",
        album
	});
};

// exports.deletePhotos = async (req, res) => {
//     const album = await Album.findOne({ "album": req.body.album});
// 	if (album == null) {
//         res.status(404).json({ message: "No Album Found" })
//         return
//     }
//     photosToDelete = req.body.photos;
//     for(i=0; i<photosToDelete.length; i++){
//         const photo = await Photo.findOne({ "photo": photosToDelete[i]});
//         await Album.deleteOne({"photo": photo})
//     }
	
// 	album.save();

// 	res.status(201).json({
// 		//message: "Photos removed successfully!"
//         album
// 	});
// };