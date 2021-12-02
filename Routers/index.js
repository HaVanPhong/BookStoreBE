const BookRouter = require("./Book.router");

module.exports = (app) => {
  app.use("/api/books", BookRouter);
};
