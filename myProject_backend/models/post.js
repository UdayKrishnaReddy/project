const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
   {
       id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           allowNull: false,
           primaryKey: true,
       },
       title: {
           type: DataTypes.STRING,
           allowNull: false,
       },
       subtitle: {
           type: DataTypes.STRING,
           allowNull: false,
       },
       content: {
           type: DataTypes.STRING,
           allowNull: true,
       },
   },
   {
       sequelize, // Pass the connection instance
       modelName: "student_tests", // Provide the name of the table
   }
);

/**
* Export the model, so that it can be used in any
* page to execute CRUD operations on the app_posts table.
*/
module.exports = Post;