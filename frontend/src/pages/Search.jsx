import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import Word from '../components/Word'
import {Pagination} from 'antd'
import commonRoute from '../consts/api'

const Search = () => {

  const [listResult, setListResult] = useState([])

  // handle search input
  const handleSearch = async (searchTerm) =>{
      console.log(`Looking for: ${searchTerm}`)
        try {
          // const response = await fetch(`${commonRoute}search/word/${searchTerm}`);
          const response = await fetch(`${commonRoute}search/word/${searchTerm}`);

          const result = await response.json();
          setListResult(result.data);
          console.log(result.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          // setLoading(false);
        }
  }
  
  //fetch api
  useEffect(() =>{
    handleSearch();
  },[])

  return (
    <div className="w-full">
      <div className="m-10">
        <SearchBar onSearch={handleSearch}/>
      </div>
      <div className="flex justify-left items-center h-full">
          <h2 className="text-sm font-bold ml-10">{listResult.length} Kết quả</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4 m-4 p-4 overflow-x-auto">
        { listResult.map((word,index) => (
          <Word word = {word}  key = {index} />
        ))}
      </div>
      {listResult.length > 6 ? (
        <div className='flex justify-center'>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      ) : null}
    </div>
  )
}

export default Search;
