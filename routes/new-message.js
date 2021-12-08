var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/new", (req, res) => {
  res.render("form");
});

module.exports = router;
