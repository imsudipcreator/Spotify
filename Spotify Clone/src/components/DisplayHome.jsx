import React ,{useContext} from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHome = () => {

  const {songsData , albumsData} = useContext(PlayerContext)
  return (
    <>
    
     <div className= 'max-h-[100%] overflow-scroll'>
      <div className='sticky top-0 bg-[#121212]'><Navbar/></div>
      
      <div className='my-5 text-2xl flex-col  gap-5  '>
        <h1 className='text-white font-bold text-3xl'>Featured Charts</h1>
        <div className='flex overflow-auto gap-4 justify-start mt-2 '> 
          {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} image={item.image} desc={(item.desc).slice(0,19).concat(item.desc.length > 18 ? "..." : "")} id={item._id}/>))}
        </div>
      
      </div>
      
      <div className='my-5 text-2xl flex-col  gap-5  '>
        <h1 className='text-white font-bold text-3xl'>Today's Hits</h1>
        <div className='flex overflow-auto gap-4 justify-start mt-2 '> 
          {songsData.map((item,index)=>(<SongItem key={index} name={item.name} image={item.image} desc={item.desc} id={item._id}/>))}
        </div>
      
      </div>
      
    </div>
    </>
  )
}

export default DisplayHome