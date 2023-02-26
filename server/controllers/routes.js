const { randomUUID } = require("crypto");
const multer = require("multer");
const {
    GridFsStorage
} = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

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

    upload.single("file")(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).send(req.file);
    });
}

exports.getFile = async (req, res) => {
    const gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection("files").findOne({
        filename: "Screen Shot 2022-11-01 at 9.01.24 PM.png"
    }, (err, file) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (!file) {
            return res.status(404).json({
                err: "No file exists"
            });
        }
        return res.status(200).json(file);
    });
}
