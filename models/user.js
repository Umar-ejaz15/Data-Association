const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  post: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
  ],
});

module.exports = mongoose.model("User", userSchema);
