import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import Word from "../components/Word.jsx";
import commonRoute from "../consts/api.js";

const Search = () => {
  const [allWord, setAllWords] = useState([]);
  const [listResult, setListResult] = useState(allWord);
  const [listBookmark, setListBookmark] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("user"));

  const handleGetAllWords = async () => {
    try {
      // const response = await fetch(`${commonRoute}search/word/${searchTerm}`);
      const response = await fetch(`${commonRoute}words`);

      const result = await response.json();
      setAllWords(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // handle search input
  const handleSearch = async (searchTerm) => {
    if (!searchTerm) {
      setListResult(allWord);
    }
    try {
      // const response = await fetch(`${commonRoute}search/word/${searchTerm}`);
      const response = await fetch(`${commonRoute}search/word/${searchTerm}`);

      const result = await response.json();
      setListResult(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getListBookmark = async () => {
    console.log(user);
    try {
      const response = await fetch(`${commonRoute}bookmark/${user._id}`);
      const result = await response.json();
      // return result.data || []
      setListBookmark(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //fetch api
  useEffect(() => {
    handleSearch();
    handleGetAllWords();
    getListBookmark();
  }, []);

  return (
    <div className="w-full h-0">
      <div className="m-10">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="flex justify-left items-center h-full">
        <h2 className="text-sm font-bold ml-10">{listResult.length} Results</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 m-4 p-4 overflow-x-auto overflow-y-auto ">
        {listResult.map((word, index) => (
          <Word word={word} listWords={listBookmark} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Search;
