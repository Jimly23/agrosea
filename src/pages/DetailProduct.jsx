import React, { useEffect } from 'react'
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const price = productInformation.price;
  const returnDiscount = productInformation.price - ((productInformation.discountPercent / 100)*productInformation.price)

  const priceBeforeDiscount = price.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  const priceAfterDiscount = returnDiscount.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });


  const ProductDescription = ({ description }) => {
    return (
      <div dangerouslySetInnerHTML={{ __html: description }} />
    );
  }

  return (
    <>
      <div className='max-w-[1280px] mx-auto px-2 grid grid-cols-1 md:grid-cols-11 gap-y-3 md:gap-8 pb-20'>
        <div className='col-span-4 lg:col-span-3 '>
          <ImgDetailProduct imgProducts={productInformation.productImage}/>
        </div>
        <main className='col-span-10 md:col-span-7 lg:col-span-5 w-full rounded-lg'>
          <div className="desc-product mb-20">
            <div className="header font-medium pb-5 border-b">
              <div className="title text-2xl"><h4>{productInformation.productName}</h4></div>
              <div className="selling flex items-center mb-2">
                <h6>Terjual <span>{productInformation.totalSold}rb+ |</span></h6>
                <div className="ms-2 rating flex items-center">
                  <FaStar className='text-yellow-400 me-1'/>
                  <p>4.5</p>
                </div>
              </div>
              <div className="price">
                <h4 className='text-[30px] font-bold'>{priceAfterDiscount}</h4>
                <div className="discount text-[16px] flex items-center">
                  <h6 className='text-slate-500 line-through font-medium'>{priceBeforeDiscount}</h6>
                  <h6 className='text-red-500 font-bold ms-1'>{productInformation.discountPercent}%</h6>
                </div>
              </div>
            </div>
            <div className="detail-product py-5">
              <h6 className='font-medium mb-3 text-aksen w-[45px] border-b-2 border-aksen'>Detail</h6>
              {/* <div className="box-detail mb-3">
                <p>Kondisi : <span className='font-medium'>Baru</span></p>
                <p>Min. Pemesanan : <span className='font-medium'>1 Buah</span></p>
                <p>Etalase : <span className='font-medium text-aksen'>semua etalase</span></p>
              </div> */}
              <div className="desc-product text-[15px]">
                {/* <p>{productInformation.desc}</p> */}
                <ProductDescription description={productInformation.desc}/>
              </div>
            </div>
          </div>
        </main>
        <SidebarDetailPrice productId={productInformation.id} productImage={productInformation.productImage[0]} productName={productInformation.productName} priceAfterDiscount={returnDiscount}/>

        {/* garis */}
        <div className='col-span-12 font-medium text-2xl'>
          <h6 className='py-4'>Ulasan</h6>
          <hr />
        </div>

        {/* ulasan */}
        <div className="rating-ulasan col-span-4 w-full my-5">
          {/* <h5 className='font-medium text-lg border-b py-3 mb-5'>Ulasan</h5> */}
          {/* <div className="header flex justify-center items-center mb-5">
            <div className="total-rating flex items-center mb-2">
              <div className='w-[110px] h-[110px] flex items-center justify-center border rounded-full bg-yellow-300'>
                <div className='w-[94%] h-[94%] flex items-center justify-center bg-white rounded-full'>
                  <h1 className='text-[30px] font-medium'>5.0</h1>
                </div>
              </div>
            </div>
            <h6 className='text-[15px] font-medium mb-1'>95% pembeli merasa puas</h6>
            <div className="icon flex items-center">
              <FaStar className='mx-1 text-[20px] text-yellow-400'/>
              <FaStar className='mx-1 text-[20px] text-yellow-400'/>
              <FaStar className='mx-1 text-[20px] text-yellow-400'/>
              <FaStar className='mx-1 text-[20px] text-yellow-400'/>
              <FaStar className='mx-1 text-[20px] text-yellow-400'/>
            </div>
          </div> */}
          <div className="flex items-center gap-x-5">
            <div className="angka mt-[-25px]">
              <div className="total">
                <p className='font-medium text-center'><span className='text-[40px]'>5,0</span>/5</p>
              </div>
              <div className="icon flex items-center">
                <FaStar className='mx-1 text-[20px] text-yellow-400'/>
                <FaStar className='mx-1 text-[20px] text-yellow-400'/>
                <FaStar className='mx-1 text-[20px] text-yellow-400'/>
                <FaStar className='mx-1 text-[20px] text-yellow-400'/>
                <FaStar className='mx-1 text-[20px] text-yellow-400'/>
              </div>
            </div>
            <div className="rating-bar w-[70%] mx-auto">
              <RatingBar rating={5}/>
              <RatingBar rating={4}/>
              <RatingBar rating={3}/>
              <RatingBar rating={2}/>
              <RatingBar rating={1}/>
            </div>
          </div>
        </div>
        <div className="ulasan col-span-10 md:col-span-7 lg:col-span-8 w-full my-5">
          {/* <h5 className='font-medium text-lg border-b py-3 mb-5'>Ulasan</h5> */}
          <FeedBack />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DetailProduct