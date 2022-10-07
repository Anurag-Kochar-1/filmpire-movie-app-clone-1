import React from 'react'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center bg-[#272727] w-screen h-1/5 px-5 py-3
                    sm:h-14
    
    
    '>

        <h1>Flimpire</h1>

        <SearchBar />

    </div>
  )
}

export default Navbar