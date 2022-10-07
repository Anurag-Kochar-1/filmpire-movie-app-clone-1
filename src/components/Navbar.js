import React from 'react'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <div className='flex flex-row justify-between items-start bg-[#272727] w-full h-14 px-5 py-3
                    sm: 
    
    
    '>

        <h1>Flimpire</h1>

        <SearchBar />

    </div>
  )
}

export default Navbar