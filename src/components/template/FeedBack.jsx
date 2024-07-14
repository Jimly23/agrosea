import React, { useState } from 'react'
import FeedBackItem from '../organisms/FeedBackItem'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FeedBack = () => {
  const [openFeedBack, setOpenFeedBack] = useState(true)
  return (
    <div className="ulasan">
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