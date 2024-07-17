import React from 'react'

const TextBox = ({name, include}) => {

  const handleChange = (e) => {
    include(name, e.target.value)
  }

  return (
    <div>
      <h6 className='font-medium text-[13px] mb-1'>Deskripsi Produk</h6>
      <textarea onChange={handleChange} className='border outline-none p-2 text-[14px] rounded-md w-full min-h-[100px] max-h-[100px] font-normal'></textarea>
    </div>
  )
}

export default TextBox