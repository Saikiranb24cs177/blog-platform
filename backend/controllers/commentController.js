const Comment = require("../models/Comment");

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      blogId: req.params.blogId,
    });

    res.json(comments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createComment,
  getComments,
};