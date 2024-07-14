import React from 'react'
import { FaRegThumbsUp, FaStar } from 'react-icons/fa'
import { customerPic, gopayPayment } from '../../assets'


const FeedBackItem = () => {
  return (
<div className="item py-3 border-b">
          <div className="header">
            <div className="box-customer flex items-center mb-2">
              <div className="profile-pic w-8 h-8 rounded-full overflow-hidden me-2"><img src={customerPic} className='w-full h-full object-cover' /></div>
              <div className='font-medium'>
                <h6>Lutfi</h6>
                <div className="date-post text-[12px] text-slate-500 -mt-1">Ditulis 29 Juni, 2024</div>
              </div>
            </div>
            <div className="rating flex items-center text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="content my-2">
            <p>Harga sesuai kualitasss</p>
            <FaRegThumbsUp className='text-lg mt-6'/>
          </div>
        </div>
  )
}

export default FeedBackItem