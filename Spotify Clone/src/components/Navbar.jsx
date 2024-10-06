import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <>
    <div className='flex justify-between px-3 items-center py-4 rounded-md'>
        <div className='flex  gap-3 items-center'>
            <img onClick={()=>navigate(-1)} src={assets.arrow_left} className='w-8 bg-black p-1 rounded-full'/>
            <img onClick={()=>navigate(1)} src={assets.arrow_right} className='w-8 bg-black p-1 rounded-full'/>
        </div>
        <div className='flex  items-center gap-4'>
          <div className='md:flex hidden items-center gap-4'>
            <button className='bg-white text-black rounded-2xl font-semibold px-3 py-1'>Explore Premium</button>
            <button className='bg-black text-white rounded-2xl font-semibold px-3 py-1'>Install App</button>
          </div>

            <p className='rounded-full bg-pink-600 flex justify-center items-center h-8 w-8 text-white font-semibold cursor-pointer' >S</p>
        </div>

    </div>
    </>
  )
}

export default Navbar