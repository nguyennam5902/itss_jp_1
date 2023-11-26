import React from 'react'
import Topic from '../components/Topic';
import SearchBar from '../components/SearchBar';
import {Tag} from 'antd';
const Learning = () => {
  return (
    <div className="w-full h-full">
        <div className="m-10">
          <SearchBar/>
        </div>
        
        <div className='flex mt-1 overflow-x-auto'>
          <div className='w-fit h-fit m-4'>
            <h2 className="font-bold text-center text-[20px]">
              Most recently
              <Tag className="ml-2" color = "#108ee9">6</Tag>
            </h2>
            <div className="bg-white h-[60vh] w-[300px] m-4 rounded-md shadow-lg border border-gray-100 overflow-y-auto">
                <Topic/>
                <Topic/>
                <Topic/>
                <Topic/>
                <Topic/>
                <Topic/>
            </div>
          </div>
          <div className='w-fit h-fit m-4'>
            <h2 className="font-bold text-center text-[20px]">
              In progress 
              <Tag className="ml-2" color="#f50">7</Tag>
            </h2>
            <div className="bg-white h-[60vh] w-[300px] m-4 rounded-md shadow-lg border border-gray-100 overflow-y-auto ">
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
            <h2 className="font-bold text-center text-[20px]">
              Finished 
              <Tag className="ml-2" color="#87d068">6</Tag>
            </h2>
            <div className="bg-white h-[60vh] w-[300px] m-4 rounded-md overflow-y-auto shadow-lg border border-gray-100">
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

