import React from 'react'
import { FaCheckCircle, FaClock, FaStar, FaTrophy } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { profilePic } from '../../assets'

const CardStore = () => {
  return (
    <div className=' border border-slate-300 shadow-sm rounded-lg'>
      <div className="header p-3">
        <div className='flex items-center gap-2'>
          <div className="logo-store w-[45px] h-[45px] xl:w-[50px] xl:h-[50px] rounded-full overflow-hidden"><img src={profilePic} className='w-full h-full object-cover' /></div>
          <div className="store-desc">
            <h5 className='font-medium text-aksen text-lg'>Agrosea Mall</h5>
            <div className="status flex items-center gap-2 font-medium">
              <div className="official-store p-1 pe-2 rounded-full bg-blue-50 text-[10px] xl:text-[12px] flex items-center gap-1 text-aksen border border-blue-300"><FaCheckCircle size={20}/><p>Official Store</p></div>
              <div className="official-store p-1 pe-2 rounded-full bg-blue-50 text-[10px] xl:text-[12px] flex items-center gap-1 text-aksen border border-blue-300"><FaTrophy size={20} className='text-yellow-500'/><p>Top Rated</p></div>
            </div>
          </div>
        </div>
        <div className="store-rating flex items-center gap-2 py-3">
          <FaStar size={20} className='text-yellow-400'/>
          <h6>Rating seller : <span className='font-medium'>98%</span></h6>
        </div>
        <div className="border border-aksen rounded-md  h-9 flex justify-center items-center px-3 font-medium text-aksen cursor-pointer bg-blue-50">Follow</div>
      </div>
      <hr />
      <div className="store-desc p-3 text-slate-600 font-medium">
        <div className="address">
          <div className="title flex items-center gap-1 text-[15px]"><FaLocationDot /> <h6>Lokasi Toko</h6></div>
          <h6 className='font-[15px]'>Kedoya Utara, Kota Jakarta Barat</h6>
        </div>
        <div className="open flex items-center gap-1 mt-2">
          <FaClock /> <p><span className='text-green-700'>Buka</span> : 24 Jam</p>
        </div>
      </div>
    </div>
  )
}

export default CardStore