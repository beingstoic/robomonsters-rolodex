import React from  'react';
import '../search-component/search-style.css'

export const Search =({placeholder, handleChanage})=>(
    
    <div>
         <input 
         className='search'
         type='search' 
         placeholder={placeholder}
         onChange={handleChanage}/>
    </div>
)