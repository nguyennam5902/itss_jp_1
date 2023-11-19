import React from 'react'
import Word from '../components/Word'
import { useNavigate } from 'react-router-dom';

const Learning_topic = () => {
    const navigate = useNavigate()
    const backAction = () => {
        navigate(-1)
    }
  return (
    <div className="w-full">
        <div><img src="./assets/icons/home.png" alt = ""></img></div>
        <button class="bg-neutral-200 font-bold py-2 px-4 rounded text-sm ml-5 mt-5" onClick={backAction}>
            Back
        </button>
        <div className = "m-10 bg-neutral-200 flex h-20 rounded-2xl justify-center items-center">
          <h1 className="text-4xl font-bold">
            School
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 m-10 h-[65vh] overflow-y-auto">
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
        </div>
    </div>
  )
}

export default Learning_topic