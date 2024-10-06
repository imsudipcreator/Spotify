import React, { useEffect, useState } from 'react'
import { assets } from '../assets/admin-assets/assets'
import axios  from 'axios'
import { url } from '../App'
import { toast } from 'react-toastify'


const AddSong = () => {
  

  const [song, setSong] = useState(false)
  const [image, setImage] = useState(false)
  const [name, setName] = useState("")
  const [album, setAlbum] = useState("none")
  const [desc, setDesc] = useState("")
  const [loading, setLoading] = useState(false)
  const [albumData, setAlbumData] = useState([])

  const onSubmitHandler  = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const  formData = new FormData();
      formData.append('name', name);
      formData.append('album', album);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('audio', song);
   
      const  res = await axios.post(`${url}/api/song/add`, formData);
      if(res.data.success){
        toast.success("Song Added Successfully");
        setName("");
        setAlbum("none");
        setDesc("");
        setImage(false);
        setSong(false);

      }else{
        toast.error("Failed to Add Song");
      }

    } catch (error) {
       toast.error("Error Occured");     
    }
    setLoading(false)
  }


  const loadAlbumData  = async () => {
    try {
      const res = await axios.get(`${url}/api/album/list`)
      if(res.data.success){
        setAlbumData(res.data.albums)
      }
    } catch (error) {
      toast.error("Error Occured");

    }
  }
  useEffect(()=>{
    loadAlbumData()
  },[])



  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
     <div className=' animate-spin h-16 w-16 place-self-center border-4 rounded-full  border-t-green-600'></div>
    </div>
  ) : (
    <div className='w-full h-screen px-[6px]'>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-8 ' >
      <div className='grid md:grid-cols-5 grid-cols-2 gap-5 '>
        <div className='bg-gray-200 p-4 rounded-lg w-full '>
          <input onChange={(e)=>setSong(e.target.files[0])} type="file" id='song' accept='audio/*' hidden />
          <label htmlFor="song">
           <img src={song ? assets.upload_added : assets.upload_song} className='w-fit cursor-pointer' />
          </label>
        </div>

        
        <div className='bg-gray-200 p-4 rounded-lg w-full '>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
          <label htmlFor="image">
           <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-fit cursor-pointer' />
          </label>
        </div>
  
      </div>
      <div  className='flex flex-col gap-1 '>
        <label htmlFor="name">Song Name</label>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" id='name'  placeholder='Song Title' className='sm:w-[70%]  h-12 p-3 border-black border'/>
      </div>

      <div  className='flex flex-col gap-1 '>
        <label htmlFor="desc">Description</label>
        <input onChange={(e)=>setDesc(e.target.value)} value={desc}  type="text" id='desc'  placeholder='Song Description' className='sm:w-[70%] h-12 p-3 border-black border'/>
      </div>

      <div className='flex flex-col gap-1 sm:w-[30%] h-12 '>
       <label htmlFor="option">Album</label>
        <select onChange={(e)=>setAlbum(e.target.value)} defaultValue={album}  id='option' className='p-3'>
        <option  value="none">None</option>
          {albumData.map((item,index)=>{
            return(
              <option key={index} value={item.name}>{item.name}</option>

            )
          })}
        </select>
      </div>

      <button className='mt-8 sm:w-[30%] bg-zinc-900 text-white p-4 hover:bg-slate-400 hover:text-black'> Add Song</button>
     </form>
    </div>
  )
}

export default AddSong