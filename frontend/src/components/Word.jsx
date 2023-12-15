import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tag, Modal, Alert } from "antd";
import { LikeButton } from "@lyket/react";
import commonRoute from "../consts/api";
const Word = (word_detail) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const word = word_detail.word;

  const bookmarkTapped = async (word_id) => {
    try {
      if (isClicked === true) {
        const response = await fetch(`${commonRoute}/bookmark/${word_id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(word_id),
        });
        const result = await response.json();
        if (result.status === 200) {
          setIsClicked(!isClicked);
        }
      } else {
        const response = await fetch(`${commonRoute}/bookmark/${word_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        if (result.status === 200) {
          setIsClicked(!isClicked);
        }else{
            console.log("can not bookmark this one")
        }
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

      <div className="flex justify-between m-2">
        <button
          className={`flex-left fit-content bg-${
            isClicked ? "gray" : "orange"
          }-200 shadow-lg rounded-md active:bg-${
            isClicked ? "gray" : "orange"
          }-200`}
          onClick={() => bookmarkTapped(word._id)}
        >
          {/* <img src='../assets/icons/.png' alt="" /> */}
          <p className="text-left font-bold ml-2 text-sm">
            {isClicked
              ? "- Remove from list of favorite words"
              : "+ Add to list of favorite words"}
          </p>
        </button>

        <h2 className="flex text-right text-red-500 font-bold">Seen</h2>
      </div>
    </div>
  );
};

export default Word;
