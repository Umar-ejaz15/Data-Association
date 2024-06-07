const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    postData: String,
  name: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
  ],
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post", postSchema);
