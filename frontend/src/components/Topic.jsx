import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Topic = (topic_detail) => {
    const navigate = useNavigate()
    const topic = topic_detail.topic

    const handleTap = () =>{
        navigate(`/learning/learning_topic/${topic._id}`)
    }

  return (
    <div className="flex flex-col bg-[#F9F8F8] m-4 h-20 pl-2 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl border border-[#faf4f4] " onClick={handleTap} >
      <h3 className="flex-shrink-0 font-bold mt-0">{topic.topic_name}</h3>
      <div className="flex-grow"></div>
      {/* <h4 className="flex-shrink-0 font-bold text-red-500 text-sm mb-0">Completed percentage: 50%</h4> */}
    </div>
  )
}

export default Topic
