const Album = require("../models/album");
const Photo = require("../models/photo");
const User = require("../models/user");

exports.addAlbum = async (req, res) => {
    const user = await User.findOne({"username": req.body.username});
    
	// check if album already exists
	const albumNameExists = await Album.findOne({name: req.body.name, owners: user });

	if (albumNameExists) {
		return res.status(403).json({
			error: "Album name is taken",
		});
	}

	// else create a new album
	const album = new Album({"name": req.body.name});
    if(user.album == null){
        user.album = [];
    }

    user.albums.push(album);
    await user.save();

    album.owners.push(user);
	await album.save();
    
	res.status(201).json({
		//message: "Album Creation Successful!",
        album
	});
};

exports.addPhotos = async (req, res) => {
    const user = await User.findOne({"username": req.body.username});
    const album = await Album.findOne({name: req.body.name, owners: user })

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
    await album.save();

    res.status(201).json({
		//message: "Added photos successfully!",
        album
	});
};

exports.getAllPhotos = async (req, res) => { 
    // console.log(req.query)
    const user = await User.findOne({"username": req.query.username});

    if (!user) {
        res.status(404).json({ message: "No User Found" })
        return
    }
    const allPhotosAlbum = await Album.findById(user.allPhotos);
    // console.log(allPhotosAlbum)
    res.status(200).json(allPhotosAlbum);
};

exports.getAlbum = async (req, res) => { 
    const user = await User.findOne({"username": req.query.username});
    const album = await Album.findOne({name: req.query.name, owners: user });
    res.status(200).json(album);
};

exports.getAllAlbums = async (req, res) => {
    const user = await User.findOne({"username": req.query.username});
    const albums = await Album.find({owners: user});
    res.status(200).json(albums);
}

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