const multer = require("multer");
const {
    GridFsStorage
} = require("multer-gridfs-storage");
const mongoose = require("mongoose");
const ObjectID = require("mongodb").ObjectID;


exports.getTest = async (req, res) => {
    res.status(200).json({
        message: "Test API is working!",
    })
}

exports.register = async (req, res) => {
    res.status(200).json({
        message: "Register API is working!",
    })
}

exports.uploadFile = async (req, res) => {
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

    upload.array("files")(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        console.log(req);
        return res.status(200).send(req.files);
    });
}

exports.getFile = async (req, res) => {
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: "files"
    });

    // A download stream reads the file from GridFs
    const readStream = bucket.openDownloadStream(new ObjectID("63fc975ff5ec1fe50487d44b"));
    readStream.pipe(res);
}
