const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat', required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, trim: true, required: true },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
},
{
    timestamps: true,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;



    
