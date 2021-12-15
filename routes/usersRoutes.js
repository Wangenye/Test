var express = require('express');
var router = express.Router();
const { registerUser, authUserSingle } = require('../controllers/UserController')


router.route("/").post(registerUser)
router.route("/login").post(authUserSingle)


module.exports = router;