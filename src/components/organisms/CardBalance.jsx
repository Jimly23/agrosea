import React from 'react'

const CardBalance = ({title}) => {
  return (
    <div className='border shadow-sm rounded-lg bg-white'>
      <div className="header p-3 border-b font-medium"><h5>{title}</h5></div>
      <main className='p-3 text-slate-700'>
        <h4 className='font-bold text-3xl'>Rp 12.000.000</h4>
      </main>
    </div>
  )
}

export default CardBalance