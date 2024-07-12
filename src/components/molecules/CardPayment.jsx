import React, { useState } from 'react'
import { FaCheckCircle, FaIdCard, FaRegCircle } from 'react-icons/fa'

const CardPayment = ({logoPayment, paymentName, selectPayment}) => {
  return (
    <div className="debit-card px-3 flex items-center justify-between border rounded-lg py-3 mb-2 cursor-pointer hover:bg-slate-100">
      <div className="name-payment flex items-center gap-x-3">
        <img src={logoPayment} className='w-[50px]' alt="" />
        <p>{paymentName}</p>
      </div>
      {selectPayment? <FaCheckCircle size={20} className='text-green-500'/> : <FaRegCircle size={20} className='text-slate-500'/>}
    </div>
  )
}

export default CardPayment