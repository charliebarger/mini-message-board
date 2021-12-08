var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */

router.use((res, req, next) => {
  console.log("middleware working");
  next();
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
});

router.post("/new", (req, res) => {
  let form = req.body;
  messages.unshift({
    text: form.message,
    user: form.username,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
