const Sequelize=require('sequelize');
const sequelize=new Sequelize("test","root","12345",{
    host:"127.0.0.1",
    dialect:"mariadb"
})

module.exports=sequelize;