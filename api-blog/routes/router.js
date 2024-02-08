var express = require("express");
var router = express.Router();
const Post = require("../models/post");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/posts", async (req, res) => {
  res.json(await Post.find());
});

router.post("/posts", async (req, res) => {
  res.send(await Post.create(req.body));
});

module.exports = router;
