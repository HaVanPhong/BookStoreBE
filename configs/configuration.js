require("dotenv").config();

module.exports = {
  DATABASE: {
    HOST: process.env.DB_HOST || "localhost",
    PORT: process.env.DB_PORT || "5432",
    DB_NAME: process.env.DB_NAME || "test",
    USERNAME: process.env.DB_USERNAME || "root",
    PASSWORD: process.env.DB_PASSWORD || "1234",
    DIALECT: process.env.DB_DIALECT || "postgres",
  },
  PORT_SV: process.env.PORT_SV || 3000,
  SALT_ROUND: 10,
};
