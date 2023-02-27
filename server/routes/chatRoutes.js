const express = require("express");
const { verifyToken } = require("../middlewares/auth");
const {accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup} = require("../controllers/chatControllers");

const router = express.Router();

router.post('/', verifyToken, accessChat)
router.get('/fetch', verifyToken, fetchChats)
router.post('/group', verifyToken, createGroupChat)
router.put('/rename', renameGroup)// verifyToken, renameGroup)
router.put('/groupadd', addToGroup);//(protect,removeFromGroup)
router.put('/groupremove', removeFromGroup);//(protect,removeFromGroup)


module.exports = router;