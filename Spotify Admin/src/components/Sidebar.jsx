import React from "react";
import { assets } from "../assets/admin-assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className=" sm:w-[30%] w-[20%] max-h-full bg-green-800 p-4 flex flex-col gap-5 items-end">
      <div>
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          className="w-80% h-12 sm:block hidden "
        />
        <img
          onClick={() => navigate("/")}
          src={assets.logo_small}
          className="w-80%  sm:hidden block"
        />
      </div>
      <div className="flex flex-col gap-7 w-[80%] ">
        <div
          onClick={() => navigate("/add-song")}
          className="bg-white border-black sm:p-4 p-1 gap-4 flex md:drop-shadow-[-10px_10px_#00FF5B] drop-shadow-[-3px_3px_#00FF5B] items-center w-full cursor-pointer hover:translate-x-3 transition ease-in-out duration-300 delay-100"
        >
          <img src={assets.add_song} className="sm:w-8 sm:h-8 h-4 w-4" />
          <p className="font-semibold text-xl hidden md:block ">Add Song</p>
        </div>

        <div
          onClick={() => navigate("/add-album")}
          className="bg-white border-black sm:p-4 p-1 gap-4 flex md:drop-shadow-[-10px_10px_#00FF5B] drop-shadow-[-3px_3px_#00FF5B] items-center w-full cursor-pointer hover:translate-x-3 transition ease-in-out duration-300 delay-100 "
        >
          <img src={assets.add_album} className="sm:w-8 sm:h-8 h-4 w-4" />
          <p className="font-semibold text-xl hidden md:block">Add Album</p>
        </div>

        <div
          onClick={() => navigate("/list-song")}
          className="bg-white border-black sm:p-4 p-1 gap-4 flex md:drop-shadow-[-10px_10px_#00FF5B] drop-shadow-[-3px_3px_#00FF5B] items-center w-full cursor-pointer hover:translate-x-3 transition ease-in-out duration-300 delay-100"
        >
          <img src={assets.song_icon} className="sm:w-8 sm:h-8 h-4 w-4" />
          <p className="font-semibold text-xl hidden md:block">All Songs</p>
        </div>

        <div
          onClick={() => navigate("/list-album")}
          className="bg-white border-black sm:p-4 p-1 gap-4 flex md:drop-shadow-[-10px_10px_#00FF5B] drop-shadow-[-3px_3px_#00FF5B] items-center w-full cursor-pointer hover:translate-x-3 transition ease-in-out duration-300 delay-100"
        >
          <img src={assets.album_icon} className="sm:w-8 sm:h-8 h-4 w-4" />
          <p className="font-semibold text-xl hidden md:block">All Albums</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
