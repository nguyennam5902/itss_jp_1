import React, { useEffect, useState } from "react";
import Word from "../components/Word.jsx";
import { useNavigate, useParams } from "react-router-dom";
// import commonRoute from "../consts/api";
import { getListBookmark } from "../components/listBookmark.js";
const Bookmark = () => {
  const navigate = useNavigate();
  const [listWords, setListWords] = useState([]);
  const backAction = () => {
    navigate(-1);
  };

  // // handle search input
  // const handleGetWordBookmark = async () => {
  //   try {
  //     const response = await fetch(`${commonRoute}bookmark/${user._id}`);

  //     const result = await response.json();
  //     setListWords(result.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  //fetch api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getListBookmark();
        setListWords(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <div>
        <img src="./assets/icons/home.png" alt=""></img>
      </div>
      <button
        className="bg-neutral-200 font-bold py-2 px-4 rounded text-sm ml-5 mt-5"
        onClick={backAction}
      >
        Back
      </button>
      <div className="m-10 flex rounded-2xl justify-center items-center">
        {/* <h1 className="text-2xl font-bold">School</h1> */}
      </div>
      <div className="grid grid-cols-2 gap-4 m-4 p-4 overflow-x-auto">
        {listWords.map((word, index) => (
          <Word word={word} key={index} listWords = {listWords} />
        ))}
      </div>
    </div>
  );
};
export default Bookmark;
