import React,{useEffect,useState} from 'react'
import Topic from '../components/Topic';
import SearchBar from '../components/SearchBar';
import {Tag} from 'antd';
import commonRoute from '../consts/api';
const Learning = () => {
  const [topics, setTopics] = useState([])

  const allTopics = async () =>{
    try {
      const response = await fetch(`${commonRoute}search/topic/`);
      const result = await response.json();
      console.log(result.data)
      return result.data
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    } 
  }
  // handle search input
  const handleSearchTopic = async (searchTerm) =>{
    console.log(`Looking for: ${searchTerm}`)
      try {
        const response = await fetch(`${commonRoute}search/topic/${searchTerm}`);
        const result = await response.json();
        setTopics(result.data);
        console.log(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }

//fetch api
useEffect(() =>{
  const fetchData = async () => {
    const topicsData = await allTopics();
    if (topicsData) {
      setTopics(topicsData);
    }
  };

  fetchData();
  //handleSearchTopic();
},[])

  return (
    <div className="w-full h-full">
        <div className="m-10">
          <SearchBar onSearch={handleSearchTopic}/>
        </div>
        
        <div className='flex mt-1 overflow-x-auto'>
          <div className='w-fit h-fit m-4'>
            <h2 className="font-bold text-center text-[20px]">
              Most recently
              <Tag className="ml-2" color = "#108ee9">{topics.length}</Tag>
            </h2>
            <div className="bg-white h-[60vh] w-[300px] m-4 rounded-md shadow-lg border border-gray-100 overflow-y-auto">
                { topics.map((topic,index) => (
                  <Topic topic = {topic}  key = {index} />
                ))}
            </div>
          </div>
          <div className='w-fit h-fit m-4'>
            <h2 className="font-bold text-center text-[20px]">
              In progress 
              <Tag className="ml-2" color="#f50">{topics.length}</Tag>
            </h2>
            <div className="bg-white h-[60vh] w-[300px] m-4 rounded-md shadow-lg border border-gray-100 overflow-y-auto ">
              { topics.map((topic,index) => (
                <Topic topic = {topic}  key = {index} />
              ))}
            </div>
          </div>
          <div className='w-fit h-fit m-4'>
            <h2 className="font-bold text-center text-[20px]">
              Finished 
              <Tag className="ml-2" color="#87d068">{topics.length}</Tag>
            </h2>
            <div className="bg-white h-[60vh] w-[300px] m-4 rounded-md overflow-y-auto shadow-lg border border-gray-100">
              { topics.map((topic,index) => (
                <Topic topic = {topic}  key = {index} />
              ))}
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Learning;

