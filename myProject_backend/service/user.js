const db=require('../models/user');
const { Op } = require("sequelize");
const jwt=require('jsonwebtoken')


let userServices={}


userServices.getAll=()=>{
    return db.findAll({
        attributes: ["id", "username"]
    })
}

userServices.genToken=(data)=>{
    let jwtSecretKey='encrypt';
    const token=jwt.sign(data,jwtSecretKey);
    return token;
}

module.exports=userServices;