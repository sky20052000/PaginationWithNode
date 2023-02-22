const res = require("express/lib/response");
const User = require("../models/userModel");
const userController = {
    // create user
    CreateUser:async(req,res)=>{
        try{
        //   console.log(req.body);
          const {username,emailId,password, phoneN} =req.body;
          if(!(username && emailId && password && phoneN)){
            return res.status(400).json({
                success:false,
                message: "These fields are required from the registration"
            });
          }
           const userExist = await User.findOne({emailId});
           if(userExist){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            });
           }

           const user =  await User.create({
            username,
            emailId,
            password,
            phoneN

           })

             return res.status(200).json({
                success:true,
                message:"User created Successfully!",
                data:user
             });

        }catch(err){
            console.log(err,"err")
            return res.status(500).json({msg:"Something went wrong"});
        }
    },
   /// get User 
   getUser:async(req,res)=>{
    try{
        const { page = 1, limit = 10 } = req.query;

        // const page = parseInt(req.query.page);
        // const limit = parseInt(req.query.limit);
        const user = await User.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec()
        const count = await User.find().countDocuments();
         //console.log(count,"Total Counts")
         
         if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found!",
            });
         }
       return res.status(200).json({
        success:true,
        totalPages: Math.ceil(count / limit),
        currentPage:page,
        data:user,
       
       })

    }catch(err){
        console.log(err,"err")
        return res.status(500).json({msg:"Something went wrong"});
    }
   }


}
module.exports = userController