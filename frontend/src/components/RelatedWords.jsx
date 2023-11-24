import React from 'react'

const RelatedWords = (props) => {
  const { type } = props;
  if (type == 1 ){
    return (
      <div className="h-[60px] w-2/3 bg-gray-200 rounded-md mt-2 shadow-lg ring-[0.5px] ring-gray-500">
        <span className="font-medium ml-2"> Synonyms</span>
      </div>)
  }else
    return (<div className="h-[60px] w-2/3 bg-gray-200 rounded-md mt-2 shadow-lg ring-[0.5px] ring-gray-500">
            <span className="font-medium ml-2"> Anynonyms</span>
        </div>)
}

export default RelatedWords