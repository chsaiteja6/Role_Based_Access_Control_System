const express=require("express");
const dotenv=require("dotenv").config();
const dbConnect=require("./config/dbConnect");
const authRoutes=require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes");
const app=express();
app.use(express.json());
dbConnect();

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
const PORT=process.env.PORT||7002;
app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
});