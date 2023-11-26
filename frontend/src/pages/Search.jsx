import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import Word from '../components/Word'
import {Pagination} from 'antd'
const Search = () => {
  const word = {
    id: 1,
    kanji : "漢字",
    hira : "かんじ",
    mean : "Chu kanji",
    type : "Noun",
    topic : "School",
    status : 1
  }
  const [listResult, setListResult] = useState([])

  // setListResult((prevListResult) => [...prevListResult, word])
  // handle search input
  const handleSearch = (searchTerm) =>{
      console.log(`Looking for: ${searchTerm}`)
      setListResult((prevListResult) => [...prevListResult, word])
  }
  

  // useEffect(() =>{
  //   console.log('UseEffect has been called!');
  //   setListResult(listResult.push(Word))
  // })

  return (
    <div className="w-full">
      <div className="m-10">
        <SearchBar onSearch={handleSearch}/>
      </div>
      <div className="flex justify-left items-center h-full">
          <h2 className="text-sm font-bold ml-10">{listResult.length} Results</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 m-4 p-4 overflow-x-auto">
        { listResult.map((word,index) => (
          <Word word = {word}  key = {index} />
        ))}
      </div>
      <div className='flex justify-center'>
        <Pagination defaultCurrent={1} total={50} />
      </div>
      
    </div>
  )
}

export default Search;
