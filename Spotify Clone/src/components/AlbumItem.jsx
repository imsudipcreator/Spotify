import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image ,name,desc , id}) => {

    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='flex flex-col gap-3 min-w-[180px] hover:bg-[#242424] p-4'>
        <img src={image} className='rounded ' />
        <p className='font-bold text-white text-base  cursor-pointer'>{name}</p>
        <p className='text-white text-sm cursor-pointer'>{desc}</p>
    </div>
  )
}

export default AlbumItem