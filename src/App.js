import './App.css';
import { Routes, Route } from "react-router-dom"
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import DiscoverPage from './pages/DiscoverPage';


function App() {
  return (
    <div className="bg-black w-screen min-h-screen text-white
                    flex flex-col justify-between items-start
                    sm:flex-row sm:justify-between sm:bg-gray-500 
    ">
  
      <SideBar />

      <div className='flex flex-col w-full min-h-screen bg-red-200
      sm:bg-red-800 sm:w-3/4
      lg:bg-blue-500 lg:w-4/5
      xl:bg-green-700 xl:w-10/12
      
      '>
       <Navbar />

        <Routes>
          <Route path="/" exact element={<DiscoverPage />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
