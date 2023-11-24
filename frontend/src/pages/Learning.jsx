import React from 'react'
import Topic from '../components/Topic';
import SearchBar from '../components/SearchBar';
const Learning = () => {
  return (
    <div className="w-full h-full">
        <div className="m-10">
          <SearchBar/>
        </div>
        
        <div className='flex mt-1 overflow-x-auto'>
          <div className='w-fit h-fit m-4'>
            <h2 className="font-bold text-center mt-2 text-[20px]"> Most recently</h2>
            <div className="bg-neutral-100 h-[60vh] w-[300px] m-4 rounded-md shadow-lg overflow-y-auto">
                <Topic/>
                <Topic/>
                <Topic/>
                <Topic/>
                <Topic/>
                <Topic/>
            </div>
          </div>
          <div className='w-fit h-fit m-4'>
            <h2 className="font-bold text-center mt-2 text-[20px]">In progress</h2>
            <div className="bg-neutral-100 h-[60vh] w-[300px] m-4 rounded-md overflow-y-auto shadow-lg">
              <Topic/>
              <Topic/>
              <Topic/>
              <Topic/>
              <Topic/>
              <Topic/>
              <Topic/>
            </div>
          </div>
          <div className='w-fit h-fit m-4'>
            <h2 className="font-bold text-center mt-2 text-[20px]">Finished</h2>
            <div className="bg-neutral-100 h-[60vh] w-[300px] m-4 rounded-md overflow-y-auto shadow-lg">
                <Topic/>
                <Topic/>
                <Topic/>
                <Topic/>
                <Topic/>
                <Topic/>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Learning;

