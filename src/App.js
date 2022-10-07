import './App.css';
import { Routes, Route } from "react-router-dom"
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import DiscoverPage from './pages/DiscoverPage';


function App() {
  return (
    <div className="bg-black w-full min-h-screen text-white
                    flex flex-col items-start
                    sm:flex-row sm:bg-gray-500 
    ">
  
      <SideBar />

      <div className='flex flex-col'>
       <Navbar />

        <Routes>
          <Route path="/" exact element={<DiscoverPage />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
