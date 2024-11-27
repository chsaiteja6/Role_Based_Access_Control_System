const jwt=require("jsonwebtoken");
const verifyToken=(req,res,next)=>{
let token;
let authHeader=req.headers.Authorization || req.headers.authorization;
if(authHeader && authHeader.startsWith("Bearer")){
    token=authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"No Authoriaztion"});
    }

    try{

        const decode=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decode;
        next();
      
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
else{
    res.status(401).json({message:"Access Denied"});
}
};

module.exports=verifyToken;