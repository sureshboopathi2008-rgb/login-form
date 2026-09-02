const express = require("express");

const {
  login,
  getDetails,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", login);

router.get("/details", protect, getDetails);

module.exports = router;