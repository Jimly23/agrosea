import React from 'react'

const CardEducation = ({img}) => {
  return (
    <div className="card-item border rounded-md p-2 w-[300px]">
      <div className="img-box w-full h-[200px] border rounded-md overflow-hidden"><img src={img} className='w-full h-full object-cover' /></div>
      <div className="desc">
        <div className="title font-medium text-lg">Tips efektif menanam padi</div>
        <div className="sinopsis pt-1 pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        <button className='font-medium px-3 py-1 bg-aksen text-white rounded-md'>Pelajari</button>
      </div>
    </div>
  )
}

export default CardEducation