import React from 'react'
import { FaStar } from 'react-icons/fa'

const RatingBar = ({rating, progress}) => {
  return (
    <div className="bar-item flex items-center justify-between">
      <div className="flex items-center font-medium text-yellow-400">
        <h6>{rating}</h6>
        <FaStar className='ms-1' size={14}/>
      </div>
      <div className="progres-bar w-[85%] bg-slate-200 rounded-full h-[5px]">
        <div className={`h-full w-[${progress}] bg-yellow-400 rounded-full`}></div>
      </div>
    </div>
  )
}

export default RatingBar