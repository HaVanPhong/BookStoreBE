const configuration = require("../configs/configuration");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "book",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      imageLink: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publisher: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numOfPage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rateStar: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numOfReview: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
