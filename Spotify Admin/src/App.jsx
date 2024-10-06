import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';
import {Routes ,  Route} from 'react-router-dom';
import AddSong from './pages/AddSong';
import AddAlbum  from './pages/AddAlbum';
import ListAlbum from './pages/ListAlbum';
import ListSong from './pages/ListSong';
import Navbar from './components/Navbar';

export const url =  'https://spotify-jpo7.onrender.com';

function App() {

  return (
    <div className='w-screen h-screen flex'>
    <ToastContainer />
    <Sidebar/>
    <div className='flex flex-col sm:w-[70%] w-[80%]'>
      <Navbar/>
      
    <div  className=' w-full h-screen overflow-y-auto sm:p-4 py-4 bg-slate-100'>
      <Routes>
        <Route path="/add-song" element={<AddSong/>} />
        <Route path="/add-album" element={<AddAlbum/>} />
        <Route path="/list-song" element={<ListSong/>} />
        <Route path="/list-album" element={<ListAlbum/>} />
      </Routes>
    </div>
    </div>
    </div>
  )
}

export default App

