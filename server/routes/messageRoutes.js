const express = require('express');
const router = express.Router()
const { verifyToken } = require("../middlewares/auth");
const {sendMessage, allMessages} = require("../controllers/messageControllers");


router.post('/', verifyToken, sendMessage)
router.get('/:chatId', verifyToken, allMessages)

module.exports = router;