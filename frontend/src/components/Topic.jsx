import React from 'react'

const Topic = () => {
    const topic = {
        id: "1",
        name : "school",
        percentage: "50%"
    }
  return (
    <div className="bg-neutral-200 m-5 h-20 pl-2 rounded-xl">
      <h3 className="font-bold mt-0">{topic.id}. {topic.name}</h3>
      <h4 className="font-bold text-red-500 text-sm mb-0">Completed percentage: {topic.percentage}</h4>
    </div>
  )
}

export default Topic
