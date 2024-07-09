import React from 'react'

const DetailTransaction = ({title, col1, col2, col3}) => {
  return (
    <div className='border shadow-sm rounded-lg'>
      <div className="header p-3 border-b font-medium"><h5>{title}</h5></div>
      <div className="main grid grid-cols-3 text-center">
        <div className='p-3'>
          <p className='text-[14px]'>{col1}</p>
          <h5 className='font-medium text-[28px]'>0</h5>
          <p className='text-[12px] text-red-400'>Lihat Detail {'>'}</p>
        </div>
        <div className='p-3 border-l border-r'>
          <p className='text-[14px]'>{col2}</p>
          <h5 className='font-medium text-[28px]'>0</h5>
          <p className='text-[12px] text-red-400'>Lihat Detail {'>'}</p>
        </div>
        <div className='p-3'>
          <p className='text-[14px]'>{col3}</p>
          <h5 className='font-medium text-[28px]'>0</h5>
          <p className='text-[12px] text-red-400'>Lihat Detail {'>'}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailTransaction