import React, { useContext } from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

  const {seekBg , seekBar , playStatus , play , pause , track , time , previous,next  ,seekSong} = useContext(PlayerContext)
  return track ? (
    <div className='w-screen flex justify-between  items-center h-[12%] px-4 absolute bottom-0 py-3 bg-black'>
        <div className='lg:flex items-center gap-2 hidden md:flex'>
          <img src={track.image} className='h-11 rounded-sm' />
          <div className='flex-col'>
            <p className='text-white'>{track.name}</p>
            <p className='text-white opacity-45'>{track.desc}</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <div className='flex gap-3 items-center'>
                <img src={assets.shuffle_icon} className='h-4 cursor-pointer'/>
                <img onClick={()=>previous()} src={assets.prev_icon} className='h-4 cursor-pointer'/>

                {playStatus
                ?<img onClick={pause} src={assets.pause_icon} className='h-4 cursor-pointer'/>
                : <img onClick={play} src={assets.play_icon} className='h-4 cursor-pointer'/>
                }
                
              
                <img onClick={()=>next()} src={assets.next_icon} className='h-4 cursor-pointer'/>
                <img src={assets.loop_icon} className='h-4 cursor-pointer'/>
            </div>
            <div className='flex gap-4 items-center'>
                <p className='text-white'>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} onClick={seekSong} className='w-[60vw] bg-slate-50 max-w-[500px] h-1 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 bg-green-600 border-none w-[0%] rounded-full' />
                </div>
                <p className='text-white'>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className=' items-center gap-3 hidden lg:flex '>
            <img src={assets.plays_icon} className='h-5 cursor-pointer ' />
            <img src={assets.mic_icon} className='h-5 cursor-pointer' />
            <img src={assets.queue_icon} className='h-5 cursor-pointer' />
            <img src={assets.speaker_icon} className='h-5 cursor-pointer' />
            <img src={assets.volume_icon} className='h-5 cursor-pointer' />
            <img src={assets.mini_player_icon} className='h-5 cursor-pointer' />
            <img src={assets.zoom_icon} className='h-5 cursor-pointer' />
        </div>
    </div>
  )  : null

}

export default Player