const express = require("express");
const router = express.Router();

// import controllers
const { getTest, uploadFile, getFile } = require("../controllers/routes");
const { register, login, logout, getLoggedInUser,allUsers } = require("../controllers/user");

// import middlewares
const { userRegisterValidator, userById } = require("../middlewares/user");
const { verifyToken } = require("../middlewares/auth");

// api routes
router.get("/test", getTest);
router.post("/register", userRegisterValidator, register);

router.post("/upload", uploadFile);
router.get("/file", getFile);

router.post("/login", login);
router.get("/logout", logout);
router.get("/user", verifyToken, userById, getLoggedInUser);

router.get("/allUsers", allUsers);//verifyToken, allUsers);

module.exports = router;