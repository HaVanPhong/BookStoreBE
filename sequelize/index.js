const configuration = require("../configs/configuration");
const { Sequelize } = require("sequelize");
const extraSetup = require("./extra.setup");

const { DB_NAME, USERNAME, PASSWORD, HOST, PORT, DIALECT } =
  configuration.DATABASE;

const configOption = {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    // config with postgres
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  timezone: "+07:00",
};

const sequelize = new Sequelize(
  `postgres://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DB_NAME}`,
  configOption
);
const defindModels = [require("../Models/Book.model")];
for (const model of defindModels) {
  model(sequelize);
}

extraSetup(sequelize);

module.exports = {
  sequelize,
  Book: sequelize.models.book,
};
