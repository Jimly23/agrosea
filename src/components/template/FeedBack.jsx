import React, { useState } from 'react'
import FeedBackItem from '../organisms/FeedBackItem'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FeedBack = () => {
  const [openFeedBack, setOpenFeedBack] = useState(true)
  return (
    <div className="ulasan">
      <div className="header flex justify-between items-center border-b py-3">
        <h4 className='text-xl font-medium w-[55px]'>Ulasan</h4>
        {openFeedBack? 
          <FaChevronUp onClick={()=>setOpenFeedBack(prev=>!prev)} className='w-7 h-7 p-2 border border-slate-600 rounded-lg'/>
          : 
          <FaChevronDown onClick={()=>setOpenFeedBack(prev=>!prev)} className='w-7 h-7 p-2 border border-slate-600 rounded-lg'/>
        }
      </div>
      {openFeedBack &&
        <div className="box-ulasan">
          <FeedBackItem />
          <FeedBackItem />
          <FeedBackItem />
        </div>
      }
    </div>
  )
}

export default FeedBack