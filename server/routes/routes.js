const express = require("express");
const router = express.Router();

// import controllers
const { uploadFile, getFile } = require("../controllers/routes");
const { register, login, logout, getLoggedInUser, allUsers, addPrompt, deletePrompt, addPhotoToPrompt,
    deletePhotoFromPrompt } = require("../controllers/user");
const { addAlbum, addPhotos, getAlbum, getAllPhotos, getAllAlbums } = require("../controllers/album");
const { addPhoto, deletePhoto, editCaption, addTags, deleteTags, getPhoto } = require("../controllers/photo");
const { igSavedPosts } = require("../controllers/ig");

// import middlewares
const { userRegisterValidator, userById } = require("../middlewares/user");
const { verifyToken } = require("../middlewares/auth");

//user routes
router.post("/register", userRegisterValidator, register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/user", verifyToken, userById, getLoggedInUser);
router.post("/addPrompt", addPrompt);
router.post("/deletePrompt", deletePrompt);
router.post("/addPhotoToPrompt", addPhotoToPrompt);
router.post("/deletePhotoFromPrompt", deletePhotoFromPrompt);

router.get("/bruh", (req, res) => {
    res.send("bruh");
});

//photo routes
router.post("/upload", uploadFile);
router.get("/file", getFile);
router.post("/addPhoto", addPhoto);
router.get("/getPhoto", getPhoto);
router.post("/deletePhoto", deletePhoto);
router.post("/editCaption", editCaption);
router.post("/addTags", addTags);
router.post("/deleteTags", deleteTags);

//album routes
router.post("/addAlbum", addAlbum);
router.post("/addPhotos", addPhotos);
router.get("/getAllPhotos", getAllPhotos);
router.get("/getAlbum", getAlbum);
router.get("/getAllAlbums", getAllAlbums);

//other routes
router.get("/allUsers", allUsers);//verifyToken, allUsers);
router.post("/igSavedPosts", igSavedPosts);

module.exports = router;
