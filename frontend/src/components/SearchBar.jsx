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
    <div className="flex items-center space-x-0">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mr-1 rounded focus:outline-none focus:ring focus:border-blue-300 w-[500px]"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Select
        options={options}
        placeholder="Select an option"
      />
      <button className="text-white p-2 rounded"><img src= 'SearchIcon' alt = "Search Button"/></button>
    </div>
  );
}

export default SearchBar