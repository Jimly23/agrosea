import React from 'react'

const NotFound = () => {
  return (
    <div className='absolute left-0 top-0 right-0 bottom-0 z-50 flex items-center justify-center'>
      <div className="message-box text-center w-[300px]">
        <h3 className='text-xl font-medium'>Not Found</h3>
        <h1 className='text-[70px] font-medium'>404</h1>
      </div>
    </div>
  )
}

export default NotFound