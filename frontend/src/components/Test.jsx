import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Test = (topic_detail) => {
    const navigate = useNavigate()
    const topic = topic_detail.topic

    const handleTap = () =>{
        navigate(`/test/${topic._id}`)
    }

  return (
    <div className="flex flex-col bg-[#F9F8F8] m-4 h-20 pl-2 rounded-[10px] hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl border border-[#efefef] " onClick={handleTap} >
      <h3 className="flex-shrink-0 font-bold">{topic.topic_name}</h3>
      <div className="flex-grow"></div>
      <h4 className="flex-shrink-0 font-bold text-sm">9 questions</h4>
    </div>
  )
}

export default Test