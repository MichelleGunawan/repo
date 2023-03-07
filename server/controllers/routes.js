const multer = require("multer");
const {
    GridFsStorage
} = require("multer-gridfs-storage");
const mongoose = require("mongoose");
const ObjectID = require("mongodb").ObjectID;

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

function getFileById(id) {
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: "files"
    });

    // A download stream reads the file from GridFs
    const readStream = bucket.openDownloadStream(new ObjectID(id));
    return readStream;
}

exports.getFile = async (req, res) => {
    const readStream = getFileById(req.query.photo);
    readStream.pipe(res);
}
