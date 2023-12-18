import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import commonRoute from "../consts/api";
import Test from "../components/Test";
const Testing = (topic_detail) => {
  const navigate = useNavigate();

  const [topics, setTopics] = useState([]);

  const allTopics = async () => {
    try {
      const response = await fetch(`${commonRoute}search/topic/`);
      const result = await response.json();
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  // handle search input
  const handleSearchTopic = async (searchTerm) => {
    console.log(`Looking for: ${searchTerm}`);
    try {
      const response = await fetch(`${commonRoute}search/topic/${searchTerm}`);
      const result = await response.json();
      setTopics(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //fetch api
  useEffect(() => {
    const fetchData = async () => {
      const topicsData = await allTopics();
      if (topicsData) {
        setTopics(topicsData);
      }
    };

    fetchData();
    //handleSearchTopic();
  }, []);

  return (
    <div className="w-full">
      <div>
        <img src="./assets/icons/home.png" alt=""></img>
      </div>
      {/* <button
        className="bg-neutral-200 font-bold py-2 px-4 rounded text-sm ml-5 mt-5"
        onClick={backAction}
      >
        Back
      </button> */}
      <div className="m-10 flex rounded-2xl justify-center items-center">
        <h1 className="text-2xl font-bold">Choose one Test</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 m-4 p-2 overflow-x-auto">
        {topics.map((topic, index) => (
          <Test topic={topic} key={index} />
        ))}
      </div>
      {/* <div className="font-bold text-red-500 text-sm">
        Completed percentage: 80%
      </div> */}
    </div>
  );
};

export default Testing;
