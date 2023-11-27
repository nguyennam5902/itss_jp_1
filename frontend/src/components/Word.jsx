import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Tag} from 'antd'
const Word = (word_detail) => {
    const navigate = useNavigate()

    const [isClicked, setIsClicked] = useState(false);

    const bookmarkTapped = () => {
        setIsClicked(!isClicked)
        // console.log(isClicked)
    };

    const word = word_detail.word

    //navigate to detail word page
    const handleTap = () => {
        navigate(`words/${word.id}`)
    }

    return (
    <div className= " flex-col justify-between h-[150px] rounded-[10px] shadow-lg border border-gray-100 flex" >
        <div className="flex justify-between" onClick={handleTap}>
            <div className="flex-grow justify-start">
                <h3 className="ml-4 mt-3 font-bold">{word.kanji}({word.hira})</h3>
                <h3 className="ml-4 mt-1 font-bold">Meaning: {word.mean}</h3>
            </div>
            <div className="flex mr-1 mt-2 justify-end">
                <div className="flex flex-col items-center bg-orange-100 max-w-md h-fit rounded-[4px] pr-1 pl-2">
                    <span className="text-center font-bold text-sm m-1">{word.topic}</span>
                </div>
                <div className="flex flex-col items-center ml-2 bg-blue-300 max-w-md h-fit rounded-[4px] pr-1 pl-2">
                    <span className="text-center font-bold text-sm m-1">{word.type}</span>
                </div>
            </div>
        </div>
        
        <div className="flex justify-between m-2">
            <button className={`flex-left fit-content bg-${isClicked ? "grey" : "orange"}-200 shadow-lg rounded-md active:bg-${isClicked ? "grey" : "orange"}-200`}
                onClick={bookmarkTapped}>
            {/* <img src='../assets/icons/.png' alt="" /> */}
                <p className="text-left font-bold ml-2 text-sm">
                    {isClicked
                    ? '- Remove from list of favorite words'
                    : '+ Add to list of favorite words'}
                </p>
            </button>
            <h2 className="flex text-right text-red-500 font-bold">Seen</h2>
        </div>
        
    </div>
  )
}

export default Word