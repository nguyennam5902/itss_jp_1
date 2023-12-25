import React from 'react'

const Comment = (props) => {

    const comment = props.comment

    return (
    <div className="flex items-center h-fit w-full m-1">
        <div className="flex flex-col justify-center items-center rounded-md">
            <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="Circle icon" class="w-[50px] h-[50px]"/>
            <span className="font-bold text-sm">{comment.user}</span>
            <p className="text-sm">{comment.time}</p>
        </div>
        <div className="flex-1 items-center bg-white rounded-md shadow-md border border-gray-100 ml-2 p-4 mt-2">
            <p className="text-base">{comment.comment_text}</p>
        </div>
    </div>
  )
}

export default Comment