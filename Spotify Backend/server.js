import express from "express"
import cors from "cors"
import 'dotenv/config' 
import songRouter from "./src/routes/songRoute.js"
import connectCloudinary from "./src/config/cloudinary.js"
import connectMonogoDb from "./src/config/mongodb.js"
import albumRouter from "./src/routes/albumRoute.js"



//app config
const app = express()
const port = process.env.PORT || 6000
connectCloudinary()
connectMonogoDb()
.then(()=>{app.listen(port , ()=>{
    console.log(`Server started at port ${port}`)
})})



//middlewares
app.use(express.json())
app.use(cors())


//route initialize
app.get("/" , (req , res )=>{
  res.send("Hello World!")
})
app.use('/api/song' ,songRouter)
app.use("/api/album" ,  albumRouter)

