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
} = require("../Controllers/Book.controller");

router.route("").get(getAllBook).post(createBook);
router.route("/:id").get(getBookById).patch(updateBook).delete(deleteBook);
router.route("/author/:author").get(getBookByAuthor);
router.route("/publisher/:publisher").get(getBookByPublisher);

module.exports = router;
