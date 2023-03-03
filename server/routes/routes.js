const express = require("express");
const router = express.Router();

// import controllers

const {getTest,uploadFile, getFile } = require("../controllers/routes");
const { register, login, logout, getLoggedInUser } = require("../controllers/user");
const { igSavedPosts } = require("../controllers/ig");

// import middlewares
const { userRegisterValidator, userById } = require("../middlewares/user");
const { verifyToken } = require("../middlewares/auth");

// api routes
router.post("/upload", uploadFile);
router.get("/file", getFile);

router.post("/register", userRegisterValidator, register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/user", verifyToken, userById, getLoggedInUser);

router.get("/allUsers", allUsers);//verifyToken, allUsers);
router.post("/igSavedPosts", igSavedPosts);

module.exports = router;