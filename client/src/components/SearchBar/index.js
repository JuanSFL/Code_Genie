import React from 'react';
import { Autocomplete } from '@mui/material';
import Auth from '../../utils/auth';


function SearchBar ({ data, placeholder }) {
  return (
    <div className="search">
      <div className="searchInput"></div>
      <Autocomplete
        id="custom-input-demo"
        options={data}
        getOptionLabel={(opt) => opt.title}
       
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input
              type="text"
              {...params.inputProps} 
              place={placeholder}
              autoFocus="true"

              />
              
           
 
          </div>
        
        )}
      />
    </div>
  );
}



export default SearchBar;
