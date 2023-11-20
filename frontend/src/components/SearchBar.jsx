import React from 'react'

const SearchBar = ({onSearch}) => {
    return (
        <div className="flex items-center space-x-0">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => onSearch(e.target.value)}
          />
          <button className="text-white p-2 rounded"><img src="./assets/icons/search.png" alt = "Search Button"/></button>
        </div>
      );
}

export default SearchBar