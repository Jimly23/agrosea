import React, { useState } from 'react'
import { FaCheckCircle, FaCircle, FaRegCircle } from 'react-icons/fa'

const CheckoutProductBox = ({products, productImage, productName, productPrice, qty}) => {
  const [chooseExpedition, setChooseExpedition] = useState(1);
  return (
    <div className='rounded-lg overflow-hidden border shadow-sm'>
      <div className="toko p-3 font-medium bg-slate-100">Toko Agmart</div>
      {products.map((item, index) => (
        <div key={index} className="product-item p-3 grid grid-cols-1 md:grid-cols-10 mb-3">
          <div className="product-image col-span-2 w-[70px] h-[70px] rounded overflow-hidden mb-3 md:mb-0"><img src={item.productImage} className='w-full h-full object-cover' /></div>
          <div className="product-desc col-span-6 font-medium text-lg">{item.productName}</div>
          <div className="product-price col-span-2 font-medium text-lg">
            <h6>{item.qty} x Rp{item.total}</h6>
          </div>
        </div>
      ))}
      <div className="expedition p-3">
        <p className='text-[14px] mb-2'>Pilih Pengiriman</p>
        <div className="expedition-box flex items-center gap-x-3">
          <div onClick={()=>setChooseExpedition(1)} className="expedition-item w-[200px] border rounded-lg p-2 cursor-pointer">
            <div className="header">
              <div className="expedition-name flex items-center justify-between">
                <h5 className='text-[14px]'>Reguler</h5>
                {chooseExpedition === 1? <FaCheckCircle /> : <FaRegCircle />}
              </div>
              <div className="price font-medium my-2"><h5>Rp17.000</h5></div>
              <div className="desc text-[14px]"><p>Estimasi tiba 2-6 Juli</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProductBox