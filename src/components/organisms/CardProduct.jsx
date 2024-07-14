import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const CardProduct = ({productInformation}) => {
  const navigate = useNavigate()
  const handleNavigateClick = () => {
    navigate('/detail-product', {state: productInformation})
  }

  const returnDiscount = productInformation.price - ((productInformation.discountPercent / 100)*productInformation.price)

  const formattedNumber = returnDiscount.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  
  return (
    <div onClick={handleNavigateClick} className='w-full p-1 h-[250px] sm:h-[320px] rounded-lg border cursor-pointer'>
      <div className="box-image w-full bg-slate-300 h-[55%] sm:h-[60%] rounded overflow-hidden">
        <img src={productInformation.productImage[0]} className='w-full h-full object-cover' />
      </div>
      <div className="desc font-normal">
        <div className="title text-[15px] font-medium">{productInformation.productName}</div>
        <div className="price font-medium">{formattedNumber}</div>
        <div className="discount text-[12px] flex items-center">
          <h6 className='text-slate-500 line-through font-medium'>Rp{productInformation.price}</h6>
          <h6 className='text-red-500 font-bold ms-1'>{productInformation.discountPercent}%</h6>
        </div>
        <div className="city text-[12px] sm:text-[13px] font-medium text-slate-500 my-1">{productInformation.sellerCity}</div>
        <div className="view text-[12px] sm:text-[13px] font-medium flex items-center text-slate-500">
          <div className="rating flex items-center">
            <FaStar className='text-orange-300 me-1'/>
            <p>{productInformation.rating}</p>
          </div>
          <div className='w-[1px] h-3 bg-slate-500 mx-2'></div>
          <div className="soldout border-slate-500">
            <h6>{productInformation.totalSold}rb+ Terjual</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProduct