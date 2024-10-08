import mongoose from "mongoose";


const connectMonogoDb = async()=>{
    await  mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Mongodb connected successfully")
    })
    .catch((err)=>{console.log("Mongodb connection error" , err)})
}

export default connectMonogoDb