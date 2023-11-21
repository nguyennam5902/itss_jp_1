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
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >

            <option value="option1">Type 1</option>
            <option value="option2">Type 2</option>
          </select>
          <button className="text-white p-2 rounded"><img src="./assets/icons/search.png" alt = "Search Button"/></button>
        </div>
      );
}

export default SearchBar