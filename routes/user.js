const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");

router.get("/login", userControllers.getLogin);
router.post("/user", userControllers.postUser);
router.get("/profile/:id", userControllers.getProfile);
router.post("/profile/:id", userControllers.postProfile);
router.get("/delete/:id", userControllers.deleteUser);

module.exports = router;
