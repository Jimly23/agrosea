import React, { useState } from 'react'
import { FaCheckCircle, FaIdCard, FaRegCircle } from 'react-icons/fa'

const CardPayment = ({logoPayment, paymentName, selectPayment}) => {
  return (
    <div className="debit-card px-3 flex items-center justify-between border border-orange-300 rounded-lg py-3 mb-2">
      <div className="name-payment flex items-center gap-x-3">
        <img src={logoPayment} className='w-[30px]' alt="" />
        <p>{paymentName}</p>
      </div>
      {selectPayment === 1? <FaCheckCircle size={20} className='text-green-500'/> : <FaRegCircle size={20} className='text-green-500'/>}
    </div>
  )
}

export default CardPayment