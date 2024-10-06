import React, { useContext } from 'react'
import SideBar from './components/SideBar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'


const App = () => {

  const {audioRef , track , songsData} = useContext(PlayerContext)
  return (
  <div className='w-screen h-screen bg-black lg:pt-2 flex flex-col  '>

    {songsData !== 0 ? (
      <>
      <div className='h-[90%] flex gap-2 w-screen '>
     <SideBar/>
     <Display/>
    </div>
    <Player/>
      </>
    ):
      null
    }
    
    <audio ref={audioRef} src={track? track.file : ""} preload='auto'></audio>
  </div>
  ) 
}

export default App
