const express = require("express");
const router = express.Router();

const {
  createComment,
  getComments,
} = require("../controllers/commentController");

router.post("/", createComment);
router.get("/:blogId", getComments);

module.exports = router;