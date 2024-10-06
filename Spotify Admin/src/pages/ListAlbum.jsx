import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { url } from '../App'
import axios from 'axios'
import { assets } from '../assets/admin-assets/assets'

const ListAlbum = () => {
  const [data , setData] = useState([])
  const fetchAlbums =  async () => {
      try {
          const res = await axios.get(`${url}/api/album/list`)
          
          if (res.data.success) {
            console.log(res)
            setData(res.data.albums)
          }
          
          
      } catch (error) {
          toast.error("Error Occured")
      }
  }



  const  handleDelete = async (id) => {
      
    try {
      const  res = await axios.post(`${url}/api/album/remove` , {id})
      if (res.data.success) {
        toast.success("Album Deleted")
        await fetchAlbums()

      }
    } catch (error) {
      toast.error("Error Occured While Deleting")

    }
    
  }

  useEffect(()=>{
      fetchAlbums()
  },[])


  return (
    <>
    <div className=' grid sm:grid-cols-[1fr_2fr_3fr_2fr_1fr] grid-cols-[0.5fr_1fr_0.5fr] mb-2 sm:p-3  min-h-14 items-center text-center bg-green-500 text-white font-semibold'>
        <p className='sm:text-xl '>Image</p>
        <p className='sm:text-xl'>Name</p>
        <p className='text-xl hidden sm:block'>Description</p>
        <p className='sm:text-xl hidden sm:block'>Bg Color</p>

        <p className='sm:text-xl'>Action</p>
      </div>
        
     
      {data.map((item , index)=>{
         return (
          <>
         <div className=' grid sm:grid-cols-[1fr_2fr_3fr_2fr_1fr] grid-cols-[0.5fr_1fr_0.5fr] hover:bg-green-200 my-6 p-3 min-h-14 items-center text-center'>
            <img src={item.image} className='w-16 sm:rounded-sm rounded-xl' />
            <p key={index} className='sm:text-xl '>{item.name}</p>
            <p  className='text-xl hidden sm:block'>{(item.desc).slice(0,8)}...</p>
            <div className='hidden sm:flex justify-center'><input type='color'  value={item.bgColor}  className=' h-9  w-[50%] hidden sm:block' disabled/></div>
            <div className='flex justify-center items-center bg-red-600 rounded-md text-white sm:font-semibold max-w-70%'>
              <img src={assets.delete_icon} className='w-9 ' />
              <button onClick={()=>handleDelete(item._id)} className='hidden lg:block'>Delete</button> 
            </div>
              
         </div> 
         <hr />
         </>
         )
      })}
      </>
  )
}

export default ListAlbum