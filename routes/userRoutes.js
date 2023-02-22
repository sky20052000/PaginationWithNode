const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();
 
// add user 
router.post("/register", userController.CreateUser);

// get User 

router.get("/getUser", userController.getUser)


module.exports = router;