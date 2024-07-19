import React from 'react'

const CardBalance = ({title}) => {
  return (
    <div className='border shadow-sm rounded-lg bg-white'>
      <div className="header p-3 border-b font-medium"><h5>{title}</h5></div>
      <main className='py-3 px-5 text-slate-700 mt-5 flex items-center justify-between'>
        <h4 className='font-medium text-3xl'>Rp 12.530.000</h4>
        <button className='px-5 py-1 rounded-md border border-aksen bg-blue-50 text-aksen font-medium'>Tarik</button>
      </main>
    </div>
  )
}

export default CardBalance