const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();

const passport = require("passport");

router.get("/", (req,res,next) => {
    res.render("index.ejs");
});

router.get("/signup", (req,res,next) => {
    res.render("signup")
});

router.post("/signup", passport.authenticate ("local-signup",{
    successRedirect:"/profile",
    failureRedirect: "/signup",
    passReqToCallback: true
}));
//(req,res,next) => {
    //console.log(req.body);
    //res.send("recived")


router.get("/signin", (req,res,next) => {
    res.render("signin");
});

router.post("/signin", passport.authenticate("local-signin", {
    successRedirect: "/profile",
    failureRedirect: "/signin",
    passReqToCallback: true
}));

router.get("/logout",(req,res,next) => {
    req.logout();
    res.redirect("/");
})

router.get("/profile", isAuthenticated,(req, res, next) => {
    res.render("profile");
})

function isAuthenticated(req,res,next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/");
}

module.exports = router;