import React, { useEffect, useState } from "react";
import Word from "../components/Word.jsx";
import { useNavigate, useParams } from "react-router-dom";
import commonRoute from "../consts/api";
const Learning_topic = (topic_detail) => {
  const navigate = useNavigate();
  const backAction = () => {
    navigate(-1);
  };
  const { id } = useParams();
  const [listWords, setListWords] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [listBookmark, setListBookmark] = useState([]);

  // handle search input
  const handleGetWordByTopic = async (id) => {
    try {
      const response = await fetch(`${commonRoute}topic/${id}`);
      const result = await response.json();
      setListWords(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // setLoading(false);
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
    handleGetWordByTopic(id);
    getListBookmark();
  }, []);

  return (
    <div className="w-full h-full">
      <div>
        <img src="./assets/icons/home.png" alt=""></img>
      </div>
      <button
        className="bg-neutral-200 font-bold py-2 px-4 rounded text-sm ml-5 mt-5"
        onClick={backAction}
      >
        Back
      </button>

      <div className="grid grid-cols-2 gap-4 m-4 p-4 h-full overflow-y-auto">
        {listWords.map((word, index) => (
          <Word word={word} listWords={listBookmark} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Learning_topic;
