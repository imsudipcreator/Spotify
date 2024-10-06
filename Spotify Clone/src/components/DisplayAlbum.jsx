import React, { useContext , useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import {  assets  } from '../assets/frontend-assets/assets'
import Navbar from './Navbar'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = ({album}) => {
    const {id} = useParams()
    const [albumData ,  setAlbumData] = useState('')
    const {playWithId , albumsData , songsData }  = useContext(PlayerContext)

    useEffect(()=>{
      albumsData.map((item)=>{
        if (item._id ===  id) {
          setAlbumData(item)
        }
      }) 
    },[])

  return albumData ? (
    <div className='overflow-scroll  max-h-[100%]'>
   
    <Navbar/>
    <div className='md:flex text-white gap-4 '>
        <img src={albumData.image} alt="" />
        <div className='flex flex-col gap-4'>
            <p className=' text-xl opacity-70'>Playlist</p>
            <h1 className='font-bold text-7xl'>{albumData.name}</h1>
            <p className='text-xl opacity-70'>{albumData.desc}</p>
            <p></p>
            <div className='flex gap-2'>
            <img src={assets.spotify_logo} className='w-7 h-7'/>
            <p className='mr-6'>Spotify</p>
        
              <ul className='sm:flex hidden gap-8 list-disc '>
                <li>1,313,414 likes</li> 
                <li>50 songs</li>
                <li>about 2hr 30min</li>
              </ul>
            </div>
        </div>
    </div>
    <div className='grid sm:grid-cols-4 grid-cols-2 items-center text-center  text-gray-500 mt-4 text-base py-3'>
      <p><b>#</b> Title</p>
      <p className='hidden sm:block'>Album</p>
      <p className='hidden sm:block'>Date added</p>
      <img src={assets.clock_icon} className='w-4 m-auto self-center' />
    </div>
    <hr />
    {songsData.filter((item)=> item.album === album.name).map((item,index)=>(
        <div onClick={()=>{playWithId(item._id)}} key={index} className='grid sm:grid-cols-4 grid-cols-2 text-gray-500  text-base gap-4 text-center items-center hover:bg-[#242424] py-5 px-2 cursor-pointer rounded'>
        <p className='flex gap-2'><b>{index+1}</b><img src={item.image} className='w-10' /> {item.name}</p>
        <p className='hidden sm:block'>{albumData.name}</p>
        <p className='hidden sm:block'>5 days ago</p>
        <p className=''>{item.duration}</p>
        
      </div>
    ))}
    
    </div>
  ) : null
}

export default DisplayAlbum