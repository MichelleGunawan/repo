const express = require("express");
const router = express.Router();

// import controllers
const { uploadFile, getFile } = require("../controllers/routes");
const { register, login, logout, getLoggedInUser} = require("../controllers/user");
const { addAlbum, addPhotos, getAlbum, getAllPhotos } = require("../controllers/album");
const { addPhoto, deletePhoto, editCaption, addTags, deleteTags} = require("../controllers/photo");
const { igSavedPosts } = require("../controllers/ig");

// import middlewares
const { userRegisterValidator, userById } = require("../middlewares/user");
const { verifyToken } = require("../middlewares/auth");

//user routes
router.post("/register", userRegisterValidator, register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/user", verifyToken, userById, getLoggedInUser);

//photo routes
router.post("/upload", uploadFile);
router.get("/file", getFile);
router.post("/addPhoto", addPhoto);
router.post("/deletePhoto", deletePhoto);
router.post("/editCaption", editCaption);
router.post("/addTags", addTags);
router.post("/deleteTags", deleteTags);

//album routes
router.post("/addAlbum", addAlbum);
router.post("/addPhotos", addPhotos);
router.get("/getAllPhotos", getAllPhotos);
router.get("/getAlbum", getAlbum);

router.post("/igSavedPosts", igSavedPosts);
module.exports = router;