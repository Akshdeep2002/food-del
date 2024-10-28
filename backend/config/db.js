import mongoose from "mongoose"

export const connectDB=async()=>{
  await mongoose.connect('mongodb+srv://akshdeep:03062002@cluster0.bdxiusq.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}