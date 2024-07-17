import React, { useState } from 'react'
import { logoAgro, logoMarina } from '../../assets'

const CategoryProduct = ({onCategory}) => {

  const [selectCategory, setSelectCategory] = useState('')
  const [specificCategory, setSpecificCategori] = useState('')

  const handleSelectCategory = (specCategory) => {
    setSpecificCategori(specCategory)
    const data = {
      category: selectCategory,
      specCategory: specCategory
    }
    onCategory(data)
  }

  return (
    <div className="box-categories grid grid-cols-2 p-5 gap-5">
      <div onClick={()=>setSelectCategory('agro')} className={`${selectCategory === 'agro'? 'bg-blue-50 border-blue-200':'bg-slate-50'} w-full border shadow-sm rounded-lg h-[100px] flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200`}>
        <div className='text-center'>
          <img src={logoAgro} className='w-[35.5px]' />
          <h6>Agro</h6>
        </div>
      </div>
      <div onClick={()=>setSelectCategory('marina')} className={`${selectCategory === 'marina'? 'bg-blue-50 border-blue-200':'bg-slate-50'} w-full border shadow-sm rounded-lg h-[100px] flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200`}>
        <div className='text-center'>
          <img src={logoMarina} className='w-[35.5px]' />
          <h6>Marina</h6>
        </div>
      </div>

      {/* specific categories */}
      <div className="specific-categories col-span-2">
        <h5 className='text-[15px] mb-2'>Pilih Kategori Spesifik</h5>
        {selectCategory === 'agro' && 
          <ul className='flex flex-wrap items-center gap-1 font-normal text-[14px]'>
            <li onClick={()=>handleSelectCategory('produk pangan')} className={`${specificCategory === 'produk pangan' && 'bg-blue-50 border-aksen text-aksen'} cursor-pointer px-4 py-1 rounded-full border bg-slate-50`}>Produk pangan</li>
            <li onClick={()=>handleSelectCategory('peralatan & perlengkapan')} className={`${specificCategory === 'peralatan & perlengkapan' && 'bg-blue-50 border-aksen text-aksen'} cursor-pointer px-4 py-1 rounded-full border bg-slate-50`}>Peralatan & perlengkapan</li>
            <li onClick={()=>handleSelectCategory('hortikultura')} className={`${specificCategory === 'hortikultura' && 'bg-blue-50 border-aksen text-aksen'} cursor-pointer px-4 py-1 rounded-full border bg-slate-50`}>Hortikultura</li>
            <li onClick={()=>handleSelectCategory('kerajinan')} className={`${specificCategory === 'kerajinan' && 'bg-blue-50 border-aksen text-aksen'} cursor-pointer px-4 py-1 rounded-full border bg-slate-50`}>Kerajinan</li>
            <li onClick={()=>handleSelectCategory('rempah')} className={`${specificCategory === 'rempah' && 'bg-blue-50 border-aksen text-aksen'} cursor-pointer px-4 py-1 rounded-full border bg-slate-50`}>Rempah-rempah</li>
            <li onClick={()=>handleSelectCategory('lain')} className={`${specificCategory === 'lain' && 'bg-blue-50 border-aksen text-aksen'} cursor-pointer px-4 py-1 rounded-full border bg-slate-50`}>Lain-lain</li>
          </ul>
        }
        {selectCategory === 'marina' && 
          <ul className='flex flex-wrap items-center gap-1 font-normal text-[14px]'>
            <li onClick={()=>handleSelectCategory('produk pangan')} className={`${specificCategory === 'produk pangan' && 'bg-blue-50 border-aksen text-aksen'} cursor-pointer px-4 py-1 rounded-full border bg-slate-50`}>Produk pangan</li>
            <li onClick={()=>handleSelectCategory('peralatan & perlengkapan')} className={`${specificCategory === 'peralatan & perlengkapan' && 'bg-blue-50 border-aksen text-aksen'} cursor-pointer px-4 py-1 rounded-full border bg-slate-50`}>Peralatan & perlengkapan</li>
            <li onClick={()=>handleSelectCategory('kerajinan')} className={`${specificCategory === 'kerajinan' && 'bg-blue-50 border-aksen text-aksen'} cursor-pointer px-4 py-1 rounded-full border bg-slate-50`}>Kerajinan</li>
            <li onClick={()=>handleSelectCategory('lain')} className={`${specificCategory === 'lain' && 'bg-blue-50 border-aksen text-aksen'} cursor-pointer px-4 py-1 rounded-full border bg-slate-50`}>Lain-lain</li>
          </ul>
        }
      </div>
    </div>
  )
}

export default CategoryProduct