const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Image = require("../models/image.model")
const path = require("path");
const multer = require("multer");
const crypto = require("crypto");
const {GridFsStorage} = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: process.env.DB,
    options: { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    },
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if(err) {
                    return reject(err);
                }
                const filename = `${buf.toString('hex')}-avatar-${Date.now()}${path.extname(file.originalname)}`;
                const fileInfo = {
                    filename: filename,
                    bucketName: "uploads",
                };
                resolve(fileInfo);
            });
        });
    },
});

const upload = multer({ storage });

module.exports = (upload) => {
    const url = process.env.DB;
    const connect = mongoose.createConnection(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    let gfs;

    connect.once("open", () => {
        gfs = new mongoose.mongo.GridFSBucket(connect.db, {
            bucketName: "uploads"
        });
    });
}

router
    .route('/uploads')
    .post(upload.single('file'), (req, res, next) => {
        console.log(req.body);
        Image.findOne({ caption: req.body.caption })
            .then((image) => {
                console.log(image);
                if(image) {
                    return res.status(200).json({
                        success: false,
                        message: 'Image already exists',
                    });
                }
                let newImage = new Image({
                    caption: req.body.caption,
                    filename: req.file.filename,
                    fileId: req.file.id
                });
                newImage.save()
                    .then((image) => {
                        res.status(200).json({
                            succes: true,
                            image,
                        });
                    })
                    .catch(err => res.status(500).json(err));
            })
            .catch(err => res.status(500).json(err));
    })
    .get((req, res, next) => {
        Image.find({})
            .then(images => {
                res.status(200).json({
                    success: true,
                    images,
                });
            })
            .catch(err => res.status(500).json(err));
    });
router
    .route('/delete/:id')
    .get((req, res, next) => {
        Image.findOne({_id: req.params.id})
            .then((image) => {
                if(image) {
                    Image.deleteOne({_id: req.params.id})
                        .then(() => {
                            return res.status(200).json({
                                success: true,
                                message: `File with ID: ${req.params.id} deleted`,
                            });
                        })
                        .catch(err => {return res,status(500).json(err)});
                } else {
                    res.status(200).json({
                        success: false,
                        message: `File with ID: ${req.params.id} not found`,
                    });
                }
            })
            .catch(err => res.status(500).json(err));
    });
router
    .route('/files')
    .get((req, res, next) => {
        gfs.find().toArray((err, files) => {
            if(!files || files.legth === 0) {
                return res.status(200).json({
                    success: false,
                    message: "No files available"
                });
            }
            files.map(file => {
                if(file.conntentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === 'image/svg') {
                    file.isImage = true;
                } else {
                    file.isImage = false;
                }
            });
            res.status(200).json({
                success: true,
                files,
            });
        });
    });

module.exports = router;