import React from 'react'
import Topic from '../components/Topic';

const Learning = () => {
  return (
    <div className="w-full">
        <div className = "m-10 flex h-10 rounded-2xl justify-center items-center">
          <h1 className="text-2xl font-bold">
            1000 basic word
          </h1>
        </div>
        <div className=' flex flex-wrap m-10'>
          <div className="bg-neutral-100 h-[60vh] w-60 m-10 rounded-2xl overflow-y-auto ">
            <h2 className="font-bold text-center mt-2 text-[20px]"> Most recently</h2>
              <Topic/>
              <Topic/>
              <Topic/>
              <Topic/>
              <Topic/>
              <Topic/>
          </div>
          <div className="bg-neutral-100 h-[60vh] w-60 m-10 rounded-2xl overflow-y-auto">
            <h2 className="font-bold text-center mt-2 text-[20px]">In progress</h2>
            <Topic/>
            <Topic/>
            <Topic/>
            <Topic/>
            <Topic/>
            <Topic/>
            <Topic/>
          </div>
          <div className="bg-neutral-100 h-[60vh] w-60 m-10 rounded-2xl overflow-y-auto">
            <h2 className="font-bold text-center mt-2 text-[20px]">Finished</h2>
              <Topic/>
              <Topic/>
              <Topic/>
              <Topic/>
              <Topic/>
              <Topic/>
          </div>
        </div>
        
    </div>
  )
}

export default Learning;

