import React from 'react'

const TransactionItem = ({idTrx, productName, price, status}) => {
  return (
    <div className="column-name grid grid-cols-7 text-[14px] p-5 hover:bg-slate-100 gap-2">
      <h6>{idTrx}</h6>
      <h6>{productName}</h6>
      <h6>726282009</h6>
      <h6>T240516T66DG6</h6>
      <h6>Rp{price}</h6>
      <h6 className={`px-3 py-1 rounded-md text-white ${status === 'Sukses'? 'bg-green-400':'bg-orange-400'} w-[100px] text-center`}>{status}</h6>
      <h6>06 Mei 2024,20:41:37</h6>
    </div>
  )
}

export default TransactionItem