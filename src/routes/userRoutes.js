const express = require('express');
const router=express.Router();
const verifyToken=require("../middlewares/authMiddleware");
const authorizedRoles=require("../middlewares/roleMiddleware");
// Only admin can access
router.get("/admin",verifyToken,authorizedRoles("admin"),(req,res)=>{
    res.json({Message:"Welcome Admin"});
});

//only manager can access
router.get("/manager",verifyToken,authorizedRoles("admin","manager"),(req,res)=>{
    res.json({Message:"Welcome Manager"});
});

//Everyone can access
router.get("/user",verifyToken,authorizedRoles("admin","manager","user"),(req,res)=>{
    res.json({Message:"Welcome user"});
});

module.exports = router;