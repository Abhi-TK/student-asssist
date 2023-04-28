const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/users");
router.get(["/", "/login"], (req, res) => {
  
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/profile", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("profile", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/home", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("home", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/report", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("report", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/event", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("event", { user: req.user });
  } else {
    res.redirect("/login");
  }
});

router.get("/courses", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("courses", { user: req.user });
  } else {
    res.redirect("/login");
  }
});

router.get("/news", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("news", { user: req.user });
  if(req.url.match("\.js$")){
      var cssPath = path.join(__dirname, 'public', req.url);
      var fileStream = fs.createReadStream(cssPath, "UTF-8");
      res.writeHead(200, {"Content-Type": "text/javascript"});
      fileStream.pipe(res);
    }
  } else {
    res.redirect("/login");
  }
});

module.exports = router;