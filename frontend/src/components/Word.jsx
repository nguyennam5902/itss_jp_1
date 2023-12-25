import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import commonRoute from "../consts/api";
import { getListBookmark } from "./listBookmark";

const Word = ({ word, listWords }) => {
  // Function to check if a word is in the list
  const isWordInList = (word, list) => {
    return (
      list &&
      Array.isArray(list) &&
      list.some(
        (listWord) =>
          listWord?._id === word?._id && listWord?.kanji === word?.kanji
      )
    );
  };

  // Usage in your component
  const isWordInArray = isWordInList(word, listWords);
  console.log(isWordInArray);

  const [isBookmarked, setIsBookmarked] = useState(isWordInArray);

  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    getListBookmark();
    checkIsBookmark();
    // handleBookmark();
    // handleUnBookmark();
  }, []);

  const checkIsBookmark = () => {
    // Ensure that listWords is defined before calling the some method
    if (listWords && listWords.length > 0) {
      const isWordInArray = listWords.some(
        (listWord) => listWord._id === word._id && listWord.kanji === word.kanji
      );
      setIsBookmarked(isWordInArray);
    } else {
      // Handle the case where listWords is undefined or empty
      setIsBookmarked(false);
    }
  };

  const handleBookmark = async () => {
    try {
      const response = await fetch(`${commonRoute}bookmark`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: user._id, wordID: word._id }),
      });
      const result = await response.json();
      if (result.status === 200) {
        setIsBookmarked(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUnBookmark = async () => {
    try {
      const response = await fetch(
        `${commonRoute}bookmark/${user._id}/${word._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (result.status === 200) {
        // setIsClicked(false);
        setIsBookmarked(false);
      } else {
        console.log("can not bookmark this one");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //navigate to detail word page
  const handleTap = () => {
    navigate(`words/${word._id}`);
  };

  return (
    <div className=" flex-col justify-between h-[150px] rounded-[10px] shadow-lg border border-gray-100 flex">
      <div className="flex justify-between" onClick={handleTap}>
        <div className="flex-grow justify-start">
          {word.kanji !== "" ? (
            <h3 className="ml-4 mt-3 font-bold">
              {word.kanji}({word.hiragana})
            </h3>
          ) : (
            <h3 className="ml-4 mt-3 font-bold">{word.katakana}</h3>
          )}
          <h3 className="ml-4 mt-1 font-bold">Meaning: {word.meaning}</h3>
        </div>
        <div className="flex mr-1 mt-2 justify-end">
          {word.topic != null && (
            <div className="flex flex-col items-center bg-orange-100 max-w-md h-fit rounded-[4px] pr-1 pl-2">
              <span className="text-center font-bold text-sm m-1">
                {word.topic}
              </span>
            </div>
          )}
          <div className="flex flex-col items-center ml-2 bg-blue-300 max-w-md h-fit rounded-[4px] pr-1 pl-2">
            <span className="text-center font-bold text-sm m-1">
              {word.type}
            </span>
          </div>
        </div>
      </div>

      {user.username !== "admin" && (
        <div className="flex justify-between m-2">
          {isBookmarked ? (
            <button
              className="flex-left fit-content bg-gray-200 shadow-lg rounded-md active:bg-orange-200"
              onClick={handleUnBookmark}
            >
              <p className="text-left font-bold ml-2 text-sm">
                - Remove from list of favorite words
              </p>
            </button>
          ) : (
            <button
              className="flex-left fit-content bg-orange-200 shadow-lg rounded-md active:bg-gray-200"
              onClick={handleBookmark}
            >
              <p className="text-left font-bold ml-2 text-sm">
                + Add to your favorite words
              </p>
            </button>
          )}

          <h2 className="flex text-right text-red-500 font-bold">Seen</h2>
        </div>
      )}
    </div>
  );
};

export default Word;
