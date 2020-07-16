import React from  'react';

export const Search =({placeholder, handleChanage})=>(
    
    <div>
         <input 
         className='search'
         type='search' 
         placeholder={placeholder}
         onChange={handleChanage}/>
    </div>
)