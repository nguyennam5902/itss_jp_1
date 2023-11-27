import React,{useState, userState} from 'react'
import Select from 'react-select';
import icons from '../consts/const';
const SearchBar = ({onSearch}) => {
  const options = [
    { value: 'option1', label: 'School' },
    { value: 'option2', label: 'Family' },
    { value: 'option3', label: 'Internet' },
  ];

  const [searchTerm , setSearchTerm ] = useState('')

  const handleChange = (event) =>{
    const value = event.target.value
    setSearchTerm(value)
  }

  const handleSearch = () =>{
    onSearch(searchTerm)
  }

  const handleKeyDown = (event) =>{
    if(event.key === 'Enter' ){
      handleSearch()
    }
  }
    
  return (
    <div className="flex items-center space-x-1 h-10">
      <div className="flex items-center space-x-0 border rounded-[25px] w-full h-full ">
        <button className="text-white p-2 w-[50px] h-[50px] rounded"><img src= {icons.SearchIconButton} alt = "Search Button" onClick={handleSearch}/></button>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search..."
          className="border-none mr-4 p-2 rounded-[20px] h-full w-full focus:border-transparent focus:outline-none"
          // onChange={(e) => onSearch(e.target.value)}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
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