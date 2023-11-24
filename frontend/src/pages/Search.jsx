import React from 'react'
import SearchBar from '../components/SearchBar'
import Word from '../components/Word'
import {Pagination} from 'antd'
const Search = () => {
  return (
    <div className="w-full">
      <div className="m-10">
        <SearchBar/>
      </div>
      <div class="flex justify-left items-center h-full">
          <h2 class="text-sm font-bold ml-10">125 Results</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 m-4 p-4 overflow-x-auto">
        <Word/>
        <Word/>
        <Word/>
        <Word/>
        <Word/>
        <Word/>
      </div>
      <div className='flex justify-center'>
        <Pagination defaultCurrent={1} total={50} />
      </div>
      
    </div>
  )
}

export default Search;
