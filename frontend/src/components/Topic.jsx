import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Topic = () => {
    const navigate = useNavigate()
    const topic = {
        id: "1",
        name : "school",
        percentage: "50%"
    }

    const handleTap = () =>{
        navigate('/learning/learning_topic')
    }

  return (
    <div className="flex flex-col bg-neutral-200 m-3 h-20 pl-2 rounded-xl " onClick={handleTap}>
      <h3 className="flex-shrink-0 font-bold mt-0">{topic.id}. {topic.name}</h3>
      <div className="flex-grow"></div>
      <h4 className="flex-shrink-0 font-bold text-red-500 text-sm mb-0">Completed percentage: {topic.percentage}</h4>
    </div>
  )
}

export default Topic
