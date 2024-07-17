import React from 'react';


const ChartTransaction = ({children, title}) => {
  return (
    <div>
      <h6 className='font-medium col-span-2 text-lg mt-5 mb-2'>{title}</h6>
      <div className='border rounded-lg shadow-sm h-[400px] p-5 bg-white'>
        {children}
      </div>
    </div>
  )
}

export default ChartTransaction