import React ,{useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Tag} from 'antd'
import { LikeButton } from '@lyket/react';
const Word = (word_detail) => {
    const navigate = useNavigate()
    const [isClicked, setIsClicked] = useState(false);
    const bookmarkTapped = () => {setIsClicked(!isClicked)};
    const word = word_detail.word

    //navigate to detail word page
    const handleTap = () => {
        navigate(`words/${word._id}`)
    }
    
    return (
    <div className= " flex-col justify-between h-[150px] rounded-[10px] shadow-lg border border-gray-100 flex" >
        <div className="flex justify-between" onClick={handleTap}>
            <div className="flex-grow justify-start">
                {word.kanji != "" 
                    ? <h3 className="ml-4 mt-3 font-bold">{word.kanji}({word.hiragana})</h3>
                    : <h3 className="ml-4 mt-3 font-bold">{word.katakana}</h3>
                }
                <h3 className="ml-4 mt-1 font-bold">Meaning: {word.meaning}</h3>
            </div>
            <div className="flex mr-1 mt-2 justify-end">
                {word.topic != null && (
                    <div className="flex flex-col items-center bg-orange-100 max-w-md h-fit rounded-[4px] pr-1 pl-2">
                        <span className="text-center font-bold text-sm m-1">{word.topic}</span>
                    </div>
                )}
                <div className="flex flex-col items-center ml-2 bg-blue-300 max-w-md h-fit rounded-[4px] pr-1 pl-2">
                    <span className="text-center font-bold text-sm m-1">{word.type}</span>
                </div>
            </div>
        </div>
        
        <div className="flex justify-between m-2">
            <button className={`flex-left fit-content bg-${isClicked ? "gray" : "orange"}-200 shadow-lg rounded-md active:bg-${isClicked ? "gray" : "orange"}-200`}
                onClick={bookmarkTapped}>
            {/* <img src='../assets/icons/.png' alt="" /> */}
                <p className="text-left font-bold ml-2 text-sm">
                    {isClicked
                    ? '- Remove from list of favorite words'
                    : '+ Add to list of favorite words'}
                </p>
            </button>
            {/* <LikeButton
  id="pizza"
  namespace="great-things"
>
  {({ handlePress, totalLikes, userLiked, isLoading }) => {
    return (
      <div>
        <button
          className="big"
          onClick={handlePress}
          disabled={isLoading}
        >
          🍕
        </button>
        <strong>Total likes: {totalLikes}</strong>
        {userLiked && <div>Thanks for liking pizza!</div>}
      </div>
    )
  }}
</LikeButton> */}
            <h2 className="flex text-right text-red-500 font-bold">Seen</h2>
        </div>
        
    </div>
  )
}

export default Word