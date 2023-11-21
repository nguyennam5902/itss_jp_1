import React from 'react'
import SearchBar from '../components/SearchBar'

const Search = () => {
  return (
    <div className="w-full">
        <div><img src="./assets/icons/home.png" alt = ""></img></div>
        <button class="bg-neutral-200 font-bold py-2 px-4 rounded text-sm ml-5 mt-5" onClick={backAction}>
            Back
        </button>
        <div className = "m-10 flex rounded-2xl justify-center items-center">
          <h1 className="text-2xl font-bold">
            <SearchBar/>
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 m-10 h-[65vh] overflow-y-auto">
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
        <div className="font-bold text-red-500 text-sm">Completed percentage: 80%</div>
    </div>
  )
}

export default Search;
