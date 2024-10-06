import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/admin-assets/assets'

const ListSong = () => {

    const [data , setData] = useState([])
    const fetchSongs =  async () => {
        try {
            const res = await axios.get(`${url}/api/song/list`)
            if(res.data.success){
                setData(res.data.songs)
            }
            
        } catch (error) {
            toast.error("Error Occured")
        }
    }

    useEffect(()=>{
        fetchSongs()
    },[])


    const  handleDelete = async (id) => {
      
      try {
        const  res = await axios.post(`${url}/api/song/remove` , {id})
        if (res.data.success) {
          toast.success("Song Deleted")
          await fetchSongs()

        }
      } catch (error) {
        toast.error("Error Occured While Deleting")

        
      }
      
    }




  return (
    <> 
   
      <div className=' grid sm:grid-cols-[1fr_2fr_3fr_2fr_1fr] grid-cols-[0.5fr_1fr_0.5fr] mb-2 sm:p-3  min-h-14 items-center text-center bg-green-500 text-white font-semibold'>
        <p className='sm:text-xl '>Image</p>
        <p className='sm:text-xl'>Name</p>
        <p className='text-xl hidden sm:block'>Album</p>
        <p className='sm:text-xl hidden sm:block'>Duration</p>
        <p className='sm:text-xl'>Action</p>
      </div>
        
     
      {data.map((item , index)=>{
         return (
          <>
         <div className=' grid sm:grid-cols-[1fr_2fr_3fr_2fr_1fr] grid-cols-[0.5fr_1fr_0.5fr] hover:bg-green-200 my-6 p-3 min-h-14 items-center text-center'>
            <img src={item.image} className='w-16 sm:rounded-sm rounded-xl' />
            <p key={index} className='sm:text-xl '>{item.name}</p>
            <p  className='text-xl hidden sm:block'>{(item.album)}</p>
            <p  className='sm:text-xl  hidden sm:block'>{item.duration} min</p>
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

export default ListSong