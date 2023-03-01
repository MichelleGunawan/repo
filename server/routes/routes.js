const express = require("express");
const router = express.Router();

// import controllers
const { getTest } = require("../controllers/routes");
const { register, login, logout, getLoggedInUser} = require("../controllers/user");
const { addAlbum, addPhotos } = require("../controllers/album");
const { addPhoto, deletePhoto, editCaption, addTags, deleteTags} = require("../controllers/photo");

// import middlewares
const {userRegisterValidator, userById} = require("../middlewares/user");
const{verifyToken} = require("../middlewares/auth");

// api routes
router.get("/test", getTest);

//user routes
router.post("/register", userRegisterValidator, register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/user", verifyToken, userById, getLoggedInUser);
router.post("/addAlbum", addAlbum);
router.post("/addPhotos", addPhotos);
router.post("/addPhoto", addPhoto);
router.post("/deletePhoto", deletePhoto);
router.post("/editCaption", editCaption);
router.post("/addTags", addTags);
router.post("/deleteTags", deleteTags);

module.exports = router;