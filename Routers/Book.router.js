const express = require("express");
const router = express.Router();

const {
  getAllBook,
  createBook,
  updateBook,
  deleteBook,
  getBookByAuthor,
  getBookByPublisher,
  getBookById,
  getBookByCategory,
} = require("../Controllers/Book.controller");

router.route("").get(getAllBook).post(createBook);
router.route("/:id").get(getBookById).patch(updateBook).delete(deleteBook);
// router.route("/author/:author").get(getBookByAuthor);
router.route("/publisher/:publisher").get(getBookByPublisher);
router.route("/categories/:category").get(getBookByCategory);

module.exports = router;
