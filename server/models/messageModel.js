const mongoose = require("mongoose");

const messgeModel = new mongoose.Schema(
    {
        sender: {type:mongoose.Schema.Types.ObjectId, ref:"User"},
        content:{type:String, trim:true},
        chat:{type:mongoose.Schema.Types.ObjectId, ref:"Chat"}
    },
    {timestamps: true,});

    constMessage = mongoose.models("Message", messageModel);
    module.exports=Message;