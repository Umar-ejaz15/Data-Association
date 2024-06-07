const express = require("express");
const userModel = require("./models/user");
const postModel = require("./models/post");
const post = require("./models/post");

const app = express();

app.get("/", async (req, res) => {
  let createduser = await userModel.create({
    name: "umar",
    email: "ui73773",
  });
  res.send(createduser);
});

app.get("/post", async (req, res) => {
  let Posts = await postModel.create({
    Postdata: "Hello",
    name: "66625a48f0e0c389eeb5710c",
  });
  let createduser = await userModel.findOne({ _id: "66625a48f0e0c389eeb5710c" });
  createduser.post.push(Posts._id);
  await createduser.save();
  res.send({ Posts, createduser });
});

app.listen(3000);
