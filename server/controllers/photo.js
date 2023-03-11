const Photo = require("../models/photo");
const multer = require("multer");
const {
    GridFsStorage
} = require("multer-gridfs-storage");
const mongoose = require("mongoose");
const ObjectID = require("mongodb").ObjectID;

exports.addPhoto = async (req, res) => {
    const storage = new GridFsStorage({
        url: process.env.MONGO_URI,
        file: (req, file) => {
            return new Promise((resolve, reject) => {
                const filename = file.originalname;

                const fileInfo = {
                    filename: filename,
                    bucketName: "files"
                };
                resolve(fileInfo);
            });
        }
    });

    const upload = multer({
        storage
    });

    upload.array("files")(req, res, async function (err) {
        const fileIds = [];

        if (err) {
            return res.status(500).json({
                message: "Error uploading files"
            });
        }

        for (let i = 0; i < req.files.length; i++) {
            const photoId = req.files[i].id;
            const photo = new Photo();
            photo.photo = photoId;
            await photo.save();
            fileIds.push(photoId);
        }

        res.status(200).send(fileIds);
    });
}

exports.deletePhoto = async (req, res) => {
    await Photo.deleteOne({ "photo": req.body.photo });

    res.status(201).json({
        message: "Photo Delete Successful!"
    });
};

function getFileById(id) {
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: "files"
    });

    // A download stream reads the file from GridFs
    const readStream = bucket.openDownloadStream(new ObjectID(id));
    return readStream;
}

exports.getPhoto = async (req, res) => {
    const photo = await Photo.findOne({ "_id": req.query.photo });

    // Log the photo document
    // console.log(photo);

    if (photo == null) {
        res.status(404).json({ message: "No Photo Found" });
        return;
    }
    res.status(200).json({ photo });
}

exports.editCaption = async (req, res) => {

    const photo = await Photo.findOne({ "photo": req.body.photo });
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
    const photo = await Photo.findOne({ "photo": req.body.photo });
    if (photo == null) {
        res.status(404).json({ message: "No Photo Found" })
        return
    }
    for (i = 0; i < req.body.tags.length; i++) {
        photo.tags.push(req.body.tags[i]);
    }
    photo.save();

    res.status(201).json({
        //message: ""
        photo
    });
};

exports.deleteTags = async (req, res) => {
    const photo = await Photo.findOne({ "photo": req.body.photo });
    if (photo == null) {
        res.status(404).json({ message: "No Photo Found" })
        return
    }
    await Photo.updateOne({ _id: photo }, { $pullAll: { tags: req.body.tags } })
    photo.save();

    res.status(201).json({
        message: "Tags removed successfully!"
    });
};
