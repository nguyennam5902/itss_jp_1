import React, {useEffect, useState} from 'react'
import Word from '../components/Word.jsx'
import { useNavigate,useParams } from 'react-router-dom';
import commonRoute from '../consts/api';
const Learning_topic = (topic_detail) => {
  const navigate = useNavigate()
  const backAction = () => {
    navigate(-1)
  }
  const {id} = useParams()

  const [listWords, setListWords] = useState([])

    // handle search input
  const handleGetWordByTopic = async (id) =>{
    try {
      const response = await fetch(`${commonRoute}topic/${id}`);
      const result = await response.json();
      setListWords(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
          // setLoading(false);
    }
  }
    
    //fetch api
  useEffect(() =>{
    handleGetWordByTopic(id);
  },)

  return (
    <div className="w-full">
        <div><img src="./assets/icons/home.png" alt = ""></img></div>
        <button className="bg-neutral-200 font-bold py-2 px-4 rounded text-sm ml-5 mt-5" onClick={backAction}>
            Back
        </button>
        <div className = "m-10 flex rounded-2xl justify-center items-center">
          <h1 className="text-2xl font-bold">
            School
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 m-4 p-4 overflow-x-auto overflow-y-auto">
          { listWords.map((word,index) => (
            <Word word = {word}  key = {index} />
          ))}
        </div>
        {/* <div className="font-bold text-red-500 text-sm">Completed percentage: 80%</div> */}
    </div>
  )
}

export default Learning_topic