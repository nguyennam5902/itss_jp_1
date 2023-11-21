import React from 'react'
import SearchBar from '../components/SearchBar';
import Word from '../components/Word';

const Search = () => {
  return (
    <div className="w-full">
      <div className="m-10">
        <SearchBar/>
      </div>
      <div class="flex justify-left items-center h-full">
          <h2 class="text-sm font-bold ml-10">125 Results</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 m-10">
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
        </div>
    </div>
  )
}

export default Search;
