const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const User = sequelize.define(
    "login",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        /**
         * Other model options go here
         */
    }
);

module.exports = User;