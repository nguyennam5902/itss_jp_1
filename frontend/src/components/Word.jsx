import React from 'react'
import {useNavigate} from 'react-router-dom'
const Word = () => {
    const navigate = useNavigate()

    const word = {
        id: 1,
        kanji : "漢字",
        hira : "かんじ",
        mean : "Chu kanji",
        type : "Noun",
        topic : "School",
        status : 1
    }

    //navigate to detail word page
    const handleTap = (id) => {
        navigate(`/search/words/${id}`)
    }

    
  return (
    <div className= "h-[150px] bg-gray-200 rounded-[10px] shadow-md" onClick={handleTap}>
        <div class="flex mr-1 mt-2 justify-end">
            <div class="flex flex-col items-center bg-green-400 max-w-md rounded-md pr-1 pl-2">
                <p class="text-center font-bold text-lg mt-2">{word.topic}</p>
            </div>
            <div class="flex flex-col items-center ml-2 bg-blue-300 max-w-md rounded-md pr-1 pl-2">
                <p class="text-center font-bold text-lg mt-2">{word.type}</p>
            </div>
        </div>
        <h3 className="ml-4 mt-3 font-bold">{word.kanji}({word.hira})</h3>
        <h3 className="ml-4 mt-1 font-bold">Meaning: {word.mean}</h3>
        <div class="flex justify-between m-2">
            <button class="flex-left fit-content bg-lime-700 rounded-md">
                {/* <img src='../assets/icons/.png' alt="" /> */}
                <p class="text-left font-bold ml-2 text-sm"> + Add to list of favorite words</p>
            </button>
            <h2 className="flex text-right text-red-500 font-bold">Seen</h2>
        </div>
        
    </div>
  )
}

export default Word