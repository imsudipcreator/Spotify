import { useNavigate } from "react-router-dom"
import {assets} from "../assets/frontend-assets/assets"


const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:flex flex-col  w-[25%] h-[98%] gap-2 hidden ">
        <div className="flex flex-col justify-around h-[20%]  bg-[#121212] px-3 py-2 rounded">
            <div className="flex items-center gap-3 cursor-pointer hover:bg-[#242424] rounded p-2" onClick={()=>navigate("/")}>
                <img src={assets.home_icon} className="h-8 "/>
                <div className="text-white font-medium ">Home</div>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-[#242424] rounded p-2">
                <img src={assets.search_icon} className="h-8"/>
                <div className="text-white font-medium ">Search</div>
            </div>
        </div>

        <div className="h-[calc(100%-20%)]  bg-[#121212] px-3 py-2 rounded gap-4 flex flex-col overflow-y-scroll ">
            <div className=" flex justify-between">
                <div className="flex gap-3 items-center cursor-pointer">
                    <img src={assets.stack_icon} className="h-8"  />
                    <div className="text-white">Your Library</div>
                </div>
                <div className="flex gap-3 cursor-pointer">
                    <img src={assets.arrow_icon} className="h-8"/>
                    <img src={assets.plus_icon} className="h-8" />

                </div>

            </div>
            <div className="self-center bg-[#242424] p-3 gap-2 w-[100%] rounded-md my-4">
              <p className="font-semibold text-gray-300">Create your first playlist</p>
              <p className="text-gray-400 my-2">it's easy we will help you</p>
              <button className="bg-slate-50 rounded-2xl py-1 px-4 mb-1">Create Playlist</button>
            </div>
            <div className="self-center bg-[#242424] p-3 gap-2 w-[100%] rounded-md ">
              <p className="font-semibold text-gray-300">Let's find some podcasts to follow</p>
              <p className="text-gray-400 my-2">we'll keep you update on new episodes</p>
              <button className="bg-slate-50 rounded-2xl py-1 px-4 mb-1">Browse Podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default SideBar