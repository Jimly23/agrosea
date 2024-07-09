import React from 'react'

const VoucherBox = () => {
  return (
    <div className="voucher font-medium mb-4">
      <h6 className='text-[15px] mb-2'>Voucher</h6>
      <div className="box-input flex items-center justify-between">
        <input type="text" className='outline-none border px-4 py-2 rounded-md w-[75%]' placeholder='Masukan Voucher'/>
        <button className='px-3 py-2 rounded-md bg-aksen text-white'>Pakai</button>
      </div>
    </div>
  )
}

export default VoucherBox