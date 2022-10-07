import React from "react";
import { BsSearch } from "react-icons/bs" 

function SearchBar() {
  return (
    <div className="flex flex-row justify-center items-center w-3/4 h-4/5 bg-[#272727]
                    sm:w-2/5 
    ">
        <input 
            type="search"
            placeholder="search..."
            className="bg-[#272727] w-full px-3 outline-none border-none
                        
                        " 
        
        />

        <BsSearch className="text-white mx-3  hover:text-lg hover:cursor-pointer"/>
        
    </div>
  );
}

export default SearchBar;
