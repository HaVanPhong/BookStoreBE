module.exports = function (status = 403, message = "Lỗi server", data = {}) {
  return {
    status,
    message,
    data,
  };
};
