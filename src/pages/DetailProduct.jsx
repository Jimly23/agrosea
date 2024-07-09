import React from 'react'
import { FaChevronLeft, FaChevronRight, FaMinus, FaPlus, FaRegThumbsUp, FaStar, FaThumbsUp } from 'react-icons/fa'
import { FaHand } from 'react-icons/fa6'
import FeedBack from '../components/template/FeedBack'
import RatingBar from '../components/molecules/RatingBar'
import SidebarDetailPrice from '../components/organisms/SidebarDetailPrice'
import ImgDetailProduct from '../components/template/ImgDetailProduct'
import { danaPayment, profilePic } from '../assets'
import { useLocation } from 'react-router-dom'
import Footer from '../components/template/Footer'

const DetailProduct = () => {
  const location = useLocation();
  const productInformation = location.state || null
  return (
    <>
      <div className='max-w-[1280px] mx-auto px-2 grid grid-cols-1 md:grid-cols-10 gap-y-3 md:gap-8 pb-20'>
        <ImgDetailProduct imgProducts={productInformation.productImage}/>
        <main className='col-span-10 md:col-span-7 lg:col-span-5 w-full rounded-lg'>
          <div className="desc-product mb-20">
            <div className="header font-medium pb-5 border-b">
              <div className="title text-2xl"><h4>{productInformation.productName}</h4></div>
              <div className="selling flex items-center mb-2">
                <h6>Terjual <span>{productInformation.totalSold}rb+ |</span></h6>
                <div className="ms-2 rating flex items-center">
                  <FaStar className='text-orange-300 me-1'/>
                  <p>4.5</p>
                </div>
              </div>
              <div className="price">
                <h4 className='text-[30px] font-bold'>Rp{productInformation.priceAfterDiscount}</h4>
                <div className="discount text-[16px] flex items-center">
                  <h6 className='text-slate-500 line-through font-medium'>Rp{productInformation.price}</h6>
                  <h6 className='text-red-500 font-bold ms-1'>{productInformation.discountPercent}%</h6>
                </div>
              </div>
            </div>
            <div className="detail-product py-5">
              <h6 className='font-medium mb-3 text-aksen w-[45px] border-b-2 border-aksen'>Detail</h6>
              <div className="box-detail mb-3">
                <p>Kondisi : <span className='font-medium'>Baru</span></p>
                <p>Min. Pemesanan : <span className='font-medium'>1 Buah</span></p>
                <p>Etalase : <span className='font-medium'>semua etalase</span></p>
              </div>
              <div className="desc-product">
                <p>{productInformation.desc}</p>
              </div>
            </div>
            <div className="toko flex py-5 border-t border-b">
              <div className="logo-toko w-10 h-10 rounded-lg overflow-hidden"><img src={profilePic} className='w-full h-full object-cover' /></div>
              <div className="desc-toko font-medium ms-3">
                <h5 className='text-lg'>{productInformation.toko}</h5>
                <h6>Online</h6>
                <div className="rating-toko flex items-center text-[14px]">
                  <FaStar className='me-1 text-orange-400'/>
                  <h6>4.9 (217,3rb)</h6>
                </div>
              </div>
            </div>
          </div>
        </main>
        <SidebarDetailPrice productId={productInformation.id} productImage={productInformation.productImage[0]} productName={productInformation.productName} priceAfterDiscount={productInformation.priceAfterDiscount}/>

        {/* ulasan */}
        <div className="rating-ulasan col-span-3 w-full my-5">
          <div className="header flex flex-col justify-center items-center mb-5">
            <div className="total-rating flex items-center mb-2">
              <div className='w-[110px] h-[110px] flex items-center justify-center border rounded-full bg-orange-300'>
                <div className='w-[94%] h-[94%] flex items-center justify-center bg-white rounded-full'>
                  <h1 className='text-[30px] font-medium'>5.0</h1>
                </div>
              </div>
            </div>
            <h6 className='text-[15px] font-medium mb-1'>95% pembeli merasa puas</h6>
            <div className="icon flex items-center">
              <FaStar className='mx-1 text-[20px] text-orange-400'/>
              <FaStar className='mx-1 text-[20px] text-orange-400'/>
              <FaStar className='mx-1 text-[20px] text-orange-400'/>
              <FaStar className='mx-1 text-[20px] text-orange-400'/>
              <FaStar className='mx-1 text-[20px] text-orange-400'/>
            </div>
          </div>
          <div className="rating-bar w-[70%] mx-auto">
            <RatingBar rating={5} progress={95}/>
            <RatingBar rating={4} progress={0}/>
            <RatingBar rating={3} progress={0}/>
            <RatingBar rating={2} progress={0}/>
            <RatingBar rating={1} progress={0}/>
          </div>
        </div>
        <div className="ulasan col-span-10 md:col-span-7 lg:col-span-5 w-full">
          <FeedBack />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DetailProduct