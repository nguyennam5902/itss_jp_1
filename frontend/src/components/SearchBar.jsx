import React from 'react'
import Select from 'react-select';
import SearchIcon from '../assets/icons/search.png'
const SearchBar = ({onSearch}) => {
  const options = [
    { value: 'option1', label: 'School' },
    { value: 'option2', label: 'Family' },
    { value: 'option3', label: 'Internet' },
  ];

    
  return (
    <div className="flex items-center space-x-1 h-10">
      <div className="flex items-center space-x-0 border rounded-[25px] w-full h-full ">
        <button className="text-white p-2 rounded"><img src= {SearchIcon} alt = "Search Button"/></button>
        <input
          type="text"
          placeholder="Search..."
          className="border-none mr-4 p-2 rounded-[20px] h-full w-full focus:border-transparent focus:outline-none"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <Select
        options={options}
        // src = {SearchIcon}
        // placeholder=""
        className="ml-1"
      />
    </div>
   
  );
}

export default SearchBar