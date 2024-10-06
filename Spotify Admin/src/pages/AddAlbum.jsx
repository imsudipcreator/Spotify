import React, { useState } from 'react'
import { assets } from '../assets/admin-assets/assets'
import axios  from 'axios'
import { url } from '../App'
import { toast } from 'react-toastify'


const AddAlbum = () => {
  

  const [color, setColor] = useState('#ffffff')
  const [image, setImage] = useState(false)
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmitHandler  = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const  formData = new FormData();
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('bgColor', color);
   
      const  res = await axios.post(`${url}/api/album/add`, formData);
      if(res.data.success){
        toast.success("Album Added Successfully");
        setName("");
        setDesc("");
        setImage(false);
        setColor("#ffffff");

      }else{
        toast.error("Failed to Add Album");
      }

    } catch (error) {
       toast.error("Error Occured");     
    }
    setLoading(false)
  }



  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
     <div className=' animate-spin h-16 w-16 place-self-center border-4 rounded-full  border-t-green-600'></div>
    </div>
  ) : (
    <div className='w-full h-screen px-[6px]'>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-8 ' >
      <div className='grid md:grid-cols-5 grid-cols-2 gap-5 '>    
        <div className='bg-gray-200 p-4 rounded-lg w-full '>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
          <label htmlFor="image">
           <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-fit cursor-pointer' />
          </label>
        </div>
  
      </div>
      <div  className='flex flex-col gap-1 '>
        <label htmlFor="name">Album Name</label>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" id='name'  placeholder='Album Title' className='sm:w-[70%]  h-12 p-3 border-black border'/>
      </div>

      <div  className='flex flex-col gap-1 '>
        <label htmlFor="desc">Description</label>
        <input onChange={(e)=>setDesc(e.target.value)} value={desc}  type="text" id='desc'  placeholder='Album Description' className='sm:w-[70%] h-12 p-3 border-black border'/>
      </div>

      <div className='flex flex-col gap-1 sm:w-[30%] h-14 '>
        <label htmlFor="color">BackGround Color</label>
       <input type="color" id='color'  value={color} onChange={(e)=>setColor(e.target.value)} className='w-[50%] rounded cursor-pointer' />

      </div>

      <button className='mt-8 sm:w-[30%] bg-zinc-900 text-white p-4 hover:bg-slate-400 hover:text-black'> Add Album</button>
     </form>
    </div>
  )
}

export default AddAlbum