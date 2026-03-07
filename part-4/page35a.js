import express from "express";
const app=express();
const productRouter = express.Router();
const userRouter=express.Router();
// Router.get("/products",(req,res)=>{
// res.send("Hello World");
// });
productRouter.get("/list",(req,res)=>{
res.send("product list");
});
userRouter.get("/list",(req,res)=>{
res.send("user list");
});
app.use("/products",productRouter);
app.use("/users",userRouter)
app.listen(5000,()=>{
    console.log("server started");

})