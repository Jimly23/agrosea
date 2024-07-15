import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CardEducation = ({img, title}) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/detail-materi', {state:{img,title}})
  }
  return (
    <div className="card-item border rounded-md p-2 w-[300px]">
      <div className="img-box w-full h-[200px] border rounded-md overflow-hidden"><img src={img} className='w-full h-full object-cover' /></div>
      <div className="desc">
        <div className="title font-medium text-lg">{title}</div>
        <div className="sinopsis pt-1 pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        <button onClick={handleNavigate} className='font-medium px-3 py-1 bg-aksen text-white rounded-md'>Pelajari</button>
      </div>
    </div>
  )
}

export default CardEducation