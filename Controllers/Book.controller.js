const { Book } = require("../sequelize");
const ErrorResponse = require("../Response/ErrorResponse");
const ResponseEntity = require("../Response/EntityResponse");
const { Op } = require("sequelize");

//GET
module.exports.getAllBook = async (req, res) => {
  try {
    const query = req.query;

    const conditions = {};

    for (const key in query.like) {
      conditions[Op.and] = {
        [key]: {
          [Op.like]: query.like[key],
        },
      };
    }

    const books = await Book.findAll({
      where: conditions,
    });
    if (books.length == 0) {
      return res.status(200).json(new ErrorResponse(404, "Trống" + conditions));
    }
    return res
      .status(200)
      .json(new ResponseEntity(200, "Lấy toàn bộ sách thành công", books));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseEntity(500, "Không lấy được sách: " + error.message));
  }
};

//POST
module.exports.createBook = async (req, res) => {
  try {
    let bookBody = req.body;
    let book = await Book.findOne({
      where: {
        title: bookBody.title,
      },
    });

    if (book) {
      return res
        .status(400)
        .json(new ErrorResponse(400, "Tên sách đã tồn tại"));
    }

    book = await Book.create(bookBody);
    res.status(201).json(new ResponseEntity(201, "Tạo sách thành công", book));
  } catch (error) {
    res
      .status(500)
      .json(new ErrorResponse(500, "Tạo sách lỗi:  " + error.message));
  }
};

//PATCH
module.exports.updateBook = async (req, res) => {
  try {
    let book = await Book.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!book)
      return res
        .status(404)
        .json(new ErrorResponse(404, "Không tìm thấy id để update"));

    const bookUpdate = await book.update(req.body);
    return res
      .status(201)
      .json(new ResponseEntity(201, "Update thành công", bookUpdate));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ErrorResponse(500, `Lỗi server: ${error.message}`));
  }
};

//DELETE
module.exports.deleteBook = async (req, res) => {
  console.log("delete book");
  try {
    let result = await Book.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log("result delete: ", result);
    if (!result) {
      return res
        .status(404)
        .json(
          new ErrorResponse(404, "Không tìm thấy id để xóa: " + req.params.id)
        );
    }
    return res.status(200).json(new ErrorResponse(200, "Xóa thành công"));
  } catch (error) {
    res
      .status(500)
      .json(new ErrorResponse(500, "Xóa sách thất bại: " + error.message));
  }
};

//GET
module.exports.getBookByAuthor = async (req, res) => {
  try {
    let books = await Book.findAll({
      where: {
        author: {
          [Op.substring]: req.params.author,
        },
      },
    });

    if (books.length === 0) {
      return res
        .status(404)
        .json(
          new ErrorResponse(
            404,
            `Không tìm thấy sách của tác giả: ${req.params.author} `
          )
        );
    }
    return res
      .status(200)
      .json(
        new ResponseEntity(200, "Lấy danh sách theo tác giả thành công", books)
      );
  } catch (error) {
    res
      .status(500)
      .json(new ErrorResponse(500, `Lỗi server: ${error.message}`));
  }
};

//GET BY PUBLISHER
module.exports.getBookByPublisher = async (req, res) => {
  try {
    console.log(req.params.publisher, "hehehe");
    let books = await Book.findAll({
      where: {
        publisher: {
          [Op.substring]: req.params.publisher,
        },
      },
    });

    if (books.length === 0) {
      return res
        .status(200)
        .json(
          new ErrorResponse(
            404,
            `Không tìm thấy sách của Nhà xuất bản: ${req.params.publisher} `
          )
        );
    }
    return res
      .status(200)
      .json(
        new ResponseEntity(200, "Lấy danh sách theo NXB thành công", books)
      );
  } catch (error) {
    res
      .status(500)
      .json(new ErrorResponse(500, `Lỗi server: ${error.message}`));
  }
};
module.exports.getBookById = async (req, res) => {
  try {
    let book = await Book.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!book) {
      return res
        .status(404)
        .json(
          new ErrorResponse(404, `Không tìm thấy sách có id: ${req.params.id}`)
        );
    }
    return res
      .status(200)
      .json(
        new ResponseEntity(
          200,
          `Lấy sách theo id: ${req.params.id} thành công`,
          book
        )
      );
  } catch (error) {
    res
      .status(500)
      .json(new ErrorResponse(500, `Lỗi server: ${error.message}`));
  }
};

module.exports.getBookByCategory = async (req, res) => {
  try {
    let book = await Book.findAll({
      where: {
        categoty: {
          [Op.substring]: req.params.category,
        },
      },
    });
    if (book.length == 0) {
      return res
        .status(200)
        .json(
          new ErrorResponse(
            404,
            `Không tìm thấy sách của thể loại: ${req.params.category}`
          )
        );
    }
    return res
      .status(200)
      .json(new ResponseEntity(200, "Tìm kiếm thành công", book));
  } catch (error) {
    res
      .status(500)
      .json(new ErrorResponse(500, `Lỗi server: ${error.message}`));
  }
};
