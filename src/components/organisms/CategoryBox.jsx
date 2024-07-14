import React, { useState } from 'react'
import { logoAgro, logoAgroMarina, logoMarina } from '../../assets'

const CategoryBox = ({onCategory}) => {
  const [isCategory, setIsCategory] = useState(1)
  const handleCheckCategory = (category) => {
    onCategory(category)
    setIsCategory(category)
  }
  return (
    <div className='font-medium mt-5'>
      <h4 className='md:text-xl'>Kategori</h4>
      <div className='w-full border grid grid-cols-3 text-center mt-2 rounded-lg shadow-sm overflow-hidden'>
        <div className={`${isCategory === 1 && 'bg-blue-100 border border-blue-400 rounded-l-lg'} py-2 all text-sm cursor-pointer flex justify-center items-center gap-x-2`} onClick={()=>handleCheckCategory(1)}>
          <img src={logoAgroMarina} className='w-[40px]' />
          <h6>Semua</h6>
        </div>
        <div className={`${isCategory === 2 && 'bg-blue-100 border border-blue-400'} py-2 agro text-sm cursor-pointer flex justify-center items-center gap-x-2 border-l border-r`} onClick={()=>handleCheckCategory(2)}>
          <img src={logoAgro} className='w-[35.5px]' />
          <h6>Agro</h6>
        </div>
        <div className={`${isCategory === 3 && 'bg-blue-100 border border-blue-400 rounded-r-lg'} py-2 marina text-sm cursor-pointer flex justify-center items-center gap-x-2`} onClick={()=>handleCheckCategory(3)}>
          <img src={logoMarina} className='w-[40px]' />
          <h6>Marina</h6>
        </div>
      </div>
    </div>
  )
}

export default CategoryBox