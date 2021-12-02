module.exports = function (status = 500, message = "Lỗi server 001") {
  return {
    status,
    message,
  };
};
