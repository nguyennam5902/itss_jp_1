import React from 'react'
import {useNavigate} from 'react-router-dom'
import Word from '../components/Word'
import image from '../assets/images/word_image.png'
import RelatedWords from '../components/RelatedWords'
import Comment from '../components/Comment'
const Word_detail = () => {
  const navigate = useNavigate()
  const backAction = () => {
    navigate(-1)
  }

  const word = {
    id: 1,
    kanji : "漢字",
    hira : "かんじ",
    mean : "Chu kanji",
    type : "Noun",
    topic : "School",
    example : "この漢字は家族いう意味です。",
    image,
    status : 1
  }

  return (
    <div className="w-full h-4/5">
      <button class="bg-neutral-200 font-bold py-2 px-4 rounded text-sm ml-5 mt-5" onClick={backAction}>
            Back
      </button>

      <div className="flex h-full justify-start m-10">
        <div className="flex flex-grow w-2/3 bg-gray-200 m-2 rounded-[10px]">
          <div className="flex-grow m-5 w-3/5">
            <h3 className="font-bold text-[20px]">{word.kanji} ({word.hira})</h3>
            <h3 className="text-[18px] mt-10">Meaning: {word.mean}</h3>
            <h3 className="text-[18px] mt-10">Example: {word.example}</h3>
            <div className="h-[250px]"></div>
            <RelatedWords/>
            <RelatedWords/>
            {/* <div class="flex justify-between m-2"> */}
              <button class="flex-bottom fit-content bg-lime-700 rounded-md">
                  {/* <img src='../assets/icons/.png' alt="" /> */}
                  <p class="text-left font-bold ml-2 text-sm"> + Add to list of favorite words</p>
              </button>
          {/* </div> */}
          </div>
          <div className="flex-grow  m-5 w-2/5">
            <div class="flex mr-1 mt-2 justify-end">
              <div class="flex flex-col items-center bg-green-400 max-w-md rounded-md pr-1 pl-2">
                  <span class="text-center font-bold text-lg">{word.topic}</span>
              </div>
              <div class="flex items-center ml-2 bg-blue-300 max-w-md rounded-md pr-1 pl-2">
                  <span class="text-center font-bold text-lg">{word.type}</span>
              </div>
            </div>
            <div className="h-[65vh] w-full rounded-2xl overflow-y-auto p-2">
              <img className="h-1/3 object-cover rounded-md mb-2" src= {word.image} alt= ""></img>
              <img className="h-1/3 object-cover rounded-md mb-2" src= {word.image} alt = ""></img>
              <img className="h-1/3 object-cover rounded-md mb-2" src= {word.image} alt = ""></img>
            </div>
          </div>
        </div>
        <div className="flex-grow w-1/3 bg-gray-200 m-2 rounded-[10px]">
          <div className="h-[65vh] w-full rounded-2xl overflow-y-auto p-2">
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
          </div>
          <div className="flex items-center space-x-0 p-">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 m-1 rounded focus:outline-none focus:ring focus:border-blue-300 w-[500px] m-[20px]"
              // onChange={(e) => onSearch(e.target.value)}
            />
            <button className="text-white p-2 rounded"><img src="" alt = ""/></button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Word_detail