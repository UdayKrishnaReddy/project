const db=require('../models/post');
const { Op } = require("sequelize");

let studentServices={}

studentServices.getAll=()=>{
    return db.findAll({
        attributes: ["id", "title"],
    })
}

studentServices.deleteStuff=()=>{
    return db.destroy({
        where:{
            id:{
                [Op.or]:[1,2,3,4,5,6,7,8]
            }
        }
    })
}

module.exports=studentServices;