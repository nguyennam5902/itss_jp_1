import React from 'react'

const Comment = () => {
    const comment = {
        id: 1,
        content: "This is so good",
        time: "2h ago",
        username: "Luong"
    }
  return (
    <div class="flex items-center h-fit w-full">
        <div class="flex flex-col justify-center items-center rounded-md">
            <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="Circle icon" class="w-[50px] h-[50px]"/>
            <h2 class="font-bold">{comment.username}</h2>
            <p class="text-sm">{comment.time}</p>
        </div>
        <div class="flex-1 items-center bg-white rounded-md shadow-md border border-gray-100 ml-2 p-4">
            <p className="text-base">{comment.content}</p>
        </div>
    </div>
  )
}

export default Comment