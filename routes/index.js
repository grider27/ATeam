const path = require("path");
const router = require('express').Router();
const auth = require('./api/auth');
const profile = require('./api/profile');
const users = require('./api/users');
const students = require('./api/students');

// API Routes
router.use("/api/auth", auth);
router.use("/api/profile", profile);
router.use("/api/users", users);
router.use("/api/students", students);

// Send every other request to the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;