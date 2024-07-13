import React, { useState } from 'react'

const VoucherBox = () => {
  const [isVoucher, setIsVoucher] = useState(false)
  const [textInput, setTextInput] = useState('')

  const handleChange = (e) => {
    setTextInput(e.target.value)
  }

  const handleClickVoucher = () => {
    setIsVoucher(true)
    setTimeout(() => {
      setIsVoucher(false)
    }, 2000);
  }
  return (
    <div className="voucher font-medium mb-4">
      <h6 className='text-[15px] mb-2'>Voucher</h6>
      <div className="box-input flex items-center justify-between">
        <input onChange={handleChange} type="text" value={isVoucher? 'Voucher belum tersedia':textInput} className={`${isVoucher? 'text-orange-500': 'text-slate-700'} outline-none border px-4 py-2 rounded-md w-[75%]`} placeholder='Masukan Voucher'/>
        <button onClick={handleClickVoucher} className='px-3 py-2 rounded-md bg-aksen text-white'>Pakai</button>
      </div>
    </div>
  )
}

export default VoucherBox