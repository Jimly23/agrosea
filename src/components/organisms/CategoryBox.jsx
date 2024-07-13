import React, { useState } from 'react'
import { logoAgro, logoAgroMarina, logoMarina } from '../../assets'

const CategoryBox = ({onCategory}) => {
  const [isCategory, setIsCategory] = useState(1)
  const handleCheckCategory = (category) => {
    onCategory(category)
  }
  return (
    <div className='font-medium mt-5'>
      <h4 className='md:text-xl'>Kategori</h4>
      <div className='w-full border grid grid-cols-3 text-center py-2 mt-2 rounded-lg shadow-sm'>
        <div className="all text-sm cursor-pointer flex justify-center items-center gap-x-2" onClick={()=>handleCheckCategory(1)}>
          <img src={logoAgroMarina} className='w-[40px]' />
          <h6>Semua</h6>
        </div>
        <div className="agro text-sm cursor-pointer flex justify-center items-center gap-x-2 border-l border-r" onClick={()=>handleCheckCategory(2)}>
          <img src={logoAgro} className='w-[40px]' />
          <h6>Agro</h6>
        </div>
        <div className="marina text-sm cursor-pointer flex justify-center items-center gap-x-2" onClick={()=>handleCheckCategory(3)}>
          <img src={logoMarina} className='w-[40px]' />
          <h6>Marina</h6>
        </div>
      </div>
    </div>
  )
}

export default CategoryBox