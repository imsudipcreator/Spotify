import { albumModel } from "../models/albumModels.js";
import {v2 as  cloudinary} from 'cloudinary';


const listAlbum =  async (req, res) => {
    try {
     
        const allAlbums = await albumModel.find({})
        res.json({ success : true , message  : "Albums listed successfully" , albums  : allAlbums })


        
    } catch (error) {
        res.json({success : false, message: error.message})

    }
}


const addAlbum = async(req,res)=>{
    try {
        const name = req.body.name
        const desc = req.body.desc
        const bgColor  = req.body.bgColor
        const imageFile = req.file
        const imageUpload = await cloudinary.uploader.upload(imageFile.path , {resource_type:"image"})

        const albumData = {
            name,
            desc,
            bgColor,
            image : imageUpload.secure_url,

        }

        const  album = await albumModel(albumData)
        await  album.save()

        res.json({success : true,  message: "Album Added Successfully"})




    } catch (error) {
        res.json({success  : false, message: error.message})

    }
}


const removeAlbum = async(req,res)=>{
    try {
        
        await  albumModel.findByIdAndDelete(req.body.id)
        res.json({success : true,  message: "Album Removed Successfully"})

    } catch (error) {
        res.json({success  : false, message: error.message})

    }
}


export {listAlbum , addAlbum ,  removeAlbum}
