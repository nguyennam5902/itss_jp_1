import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Word from "../components/Word";
import image from "../assets/images/word_image.png";
import RelatedWords from "../components/RelatedWords";
import Comment from "../components/Comment";
import icons from "../consts/const";
import commonRoute from "../consts/api";
const Word_detail = () => {
  const navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("user"));

  const backAction = () => {
    navigate(-1);
  };
  const word_detail_default = {
    id: 1,
    kanji: "",
    hiragana: "",
    meaning: "",
    type: "",
    topic: "",
    example: "",
    image,
    status: 1,
  };

  const comments_default = [
    {
      id: 1,
      content: "",
      time: "",
      username: "",
    },
    {
      id: 2,
      content: "",
      time: "",
      username: "",
    },
  ];

  const { id } = useParams(); // get wordId
  const [word, setWordDetail] = useState(word_detail_default);
  const [comments, setComments] = useState(comments_default);
  const [topic, setTopic] = useState("");
  // const [isClicked, setIsClicked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [listBookmark, setListBookmark] = useState([]);

  // const bookmarkTapped = () => {
  //   setIsClicked(!isClicked);
  //   console.log(isClicked);
  // };

  const getListBookmark = async () => {
    console.log(user);
    try {
      const response = await fetch(`${commonRoute}bookmark/${user._id}`);
      const result = await response.json();
      setListBookmark(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
  const isWordInArray = isWordInList(word, listBookmark);

  const [isBookmarked, setIsBookmarked] = useState(isWordInArray);

  const checkIsBookmark = () => {
    // Ensure that listWords is defined before calling the some method
    if (listBookmark && listBookmark.length > 0) {
      const isWordInArray = listBookmark.some(
        (listWord) => listWord._id === word._id && listWord.kanji === word.kanji
      );
      setIsBookmarked(isWordInArray);
    } else {
      // Handle the case where listWords is undefined or empty
      setIsBookmarked(false);
    }
  };

  // handle get word detail
  const handleGetWord = async (id) => {
    try {
      const response = await fetch(`${commonRoute}vocab/${id}`);
      const result = await response.json();
      console.log(response);
      setWordDetail(result);
      setComments(result.comments);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  const handleAddComment = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${commonRoute}vocab/${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment_text: newComment, user_id: user._id }),
      });
      const result = await response.json();
      console.log(result);
      setComments(result.comments);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //fetch api
  useEffect(() => {
    handleGetWord(id);
    checkIsBookmark();
    getListBookmark();
    // handleAddComment();
    // handleGetTopic(word.topic_id)
  }, [id, newComment]);

  return (
    <div className="w-full h-full">
      <button
        className="bg-neutral-200 font-bold py-2 px-4 rounded text-sm ml-5 mt-5"
        onClick={backAction}
      >
        Back
      </button>

      <div className="flex mt-5 mr-10 ml-10 overflow-x-auto">
        <div className="flex flex-grow w-2/3 mt-2 mr-2 ml-2 mb-4 rounded-[10px] shadow-lg border border-gray-100">
          <div className="flex-grow m-5 w-3/5">
            {word.kanji != "" ? (
              <h3 className="font-bold text-[20px]">
                {word.kanji} ({word.hiragana})
              </h3>
            ) : (
              <h3 className="font-bold text-[20px]">{word.katakana}</h3>
            )}
            <h3 className="text-[18px] mt-10">Meaning: {word.meaning}</h3>
            <h3 className="text-[18px] mt-10">
              Example:
              <br /> {word.example}
            </h3>
            <div className="h-[250px]"></div>
            <RelatedWords type={1} />
            <RelatedWords type={0} />
            {/* <div class="flex justify-between m-2"> */}
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
            {/* </div> */}
          </div>
          <div className="flex-grow  m-5 w-2/5">
            <div className="flex justify-center">
              {word.topic != null && (
                <div className="flex flex-col items-center bg-orange-100 max-w-md rounded-md pr-1 pl-2">
                  <span className="text-center font-bold text-lg">
                    {word.topic}
                  </span>
                </div>
              )}
              <div className="flex items-center ml-2 bg-blue-300 max-w-md rounded-md pr-1 pl-2">
                <span className="text-center font-bold text-lg">
                  {word.type}
                </span>
              </div>
            </div>
            {word.image == null ? (
              <div className="h-[65vh] w-full rounded-2xl overflow-y-auto p-2 m-2">
                <img
                  className="h-fit object-cover rounded-md mb-2"
                  src={image}
                  alt=""
                ></img>
                <img
                  className="h-fit object-cover rounded-md mb-2"
                  src={image}
                  alt=""
                ></img>
                <img
                  className="h-fit object-cover rounded-md mb-2"
                  src={image}
                  alt=""
                ></img>
              </div>
            ) : (
              <div className="h-[65vh] w-full rounded-2xl overflow-y-auto p-2 m-2">
                <img
                  className="h-fit object-cover rounded-md mb-2"
                  src={word.image}
                  alt=""
                ></img>
                <img
                  className="h-fit object-cover rounded-md mb-2"
                  src={word.image}
                  alt=""
                ></img>
                <img
                  className="h-fit object-cover rounded-md mb-2"
                  src={word.image}
                  alt=""
                ></img>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between w-1/3 mt-2 mr-2 ml-2 mb-4 rounded-[10px] shadow-lg border border-gray-100 ">
          <div className="w-full max-h-[75vh] rounded-2xl overflow-y-auto p-2">
            {comments.map((comment, index) => (
              <Comment comment={comment} key={index} />
            ))}
          </div>
          <form
            className="flex items-center space-x-0 "
            onSubmit={handleAddComment}
          >
            <input
              type="text"
              placeholder="Add comment"
              onChange={(e) => setNewComment(e.target.value)}
              className="border p-2 m-1 rounded focus:outline-none focus:ring focus:border-blue-300 w-[500px]"
              // onChange={(e) => onSearch(e.target.value)}
            />
            <button className="text-white p-2 rounded">
              <img src={icons.SendIcon} alt="" type="submit" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Word_detail;
