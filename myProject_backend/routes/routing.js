const express = require( 'express' );
const router = express.Router();    
const PostModel=require('../models/post');
const studentServices=require('../service/post')
const userServices=require('../service/user')

router.post('/create',(req,res,next)=>{
    PostModel.create(req.body).then((result)=>{
        return res.json({
            message:"Recorded"
        })
    }).catch((err)=>{
        console.log(err);
        return res.json({
          	message: "Unable to create a record!",
        });
    })
})

router.get("/get-latest-post/:id", (req, res, next) => {
    PostModel.findOne({
        attributes: ["id", "title"],
        where: {
            id: req.params.id,
        },
    })
    .then((result) => {
      	return res.json(result);
    })
    .catch((error) => {
        console.log(error);
        return res.json({
            message: 'Unable to fetch the record!'
        });
    });
});

router.get("/get-all-posts", (req, res, next) => {

   studentServices.getAll()
   .then((result) => {
      	return res.json(result);
    })
    .catch((error) => {
        console.log(error);
        return res.json({
            message: 'Unable to fetch records!'
        });
    });
});

router.get("/get-all-users", (req, res, next) => {

    userServices.getAll()
    .then((result) => {
           return res.json(result);
     })
     .catch((error) => {
         console.log(error);
         return res.json({
             message: 'Unable to fetch records!'
         });
     });
 });

router.delete('/delete',(req,res,next)=>{
    studentServices.deleteStuff().then((result) => {
        return res.json(result);
  })
  .catch((error) => {
        console.log(error);
        return res.json({
            message: 'Unable to delete'
        });
    });
})

router.post('/user',(req,res,next)=>{
    const token=userServices.genToken(req.body)
    return res.json(token);
})

module.exports = router;