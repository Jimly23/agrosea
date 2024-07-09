import React, { useState } from 'react'
import CarouselImgProduct from '../organisms/CarouselImgProduct'

const ImgDetailProduct = ({imgProducts}) => {
  const [selectProductImage, setSelectProductImage] = useState(1)
  const handleProductImage = (data) => {
    setSelectProductImage(data)
  }
  return (
    <div className="img-product col-span-3 w-full rounded-lg overflow-hidden">
      <div className="box-img max-w-[375px] mx-auto md:max-w-full h-[300px] md:h-[200px] lg:h-[320px] rounded-lg mb-2">
        <img src={`${selectProductImage === 1 && imgProducts[0] || selectProductImage === 2 && imgProducts[1] || selectProductImage === 3 && imgProducts[2] || selectProductImage === 4 && imgProducts[3] || selectProductImage === 5 && imgProducts[4]}`} alt="" className='w-full h-full object-cover' />
      </div>
      <CarouselImgProduct productImage={imgProducts} onProductImage={handleProductImage}/>
    </div>
  )
}

export default ImgDetailProduct