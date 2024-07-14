import React, { useEffect, useState } from 'react'
import { FaCheck, FaCheckCircle, FaIdCard } from 'react-icons/fa'
import CardPayment from '../components/molecules/CardPayment'
import CheckoutProductBox from '../components/template/CheckoutProductBox'
import { akulakuLogo, alfamartLogo, bcaLogo, bniLogo, briLogo, danaLogo, danaPayment, debitPayment, gopayLogo, indomaretLogo, kredivoLogo, linkajaLogo, mandiriLogo, ovoLogo } from '../assets'
import VoucherBox from '../components/molecules/VoucherBox'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { removeCart } from '../reducers/cartReducers'

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const productInformation = location.state || null
  // console.log(productInformation);
  const [createPesanan, setCreatePesanan] = useState(false);
  const [selectPayment, setSelectPayment] = useState(null);
  const [isShowAllPayment, setIsShowAllPayment] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [detailProduct, setDetailProduct] = useState({totalPrice: 0, totalQty:0, productId: []})

  useEffect(()=>{
    getTotalPrices()
  }, [productInformation])

  const getTotalPrices = () => {
    let totalPrice = 0
    let totalQty = 0
    let productId = []

    productInformation.forEach(item => {
      totalPrice += (item.priceAfterDiscount * item.qty)
      totalQty += item.qty
      productId.push(item.id)
    })

    setDetailProduct({...detailProduct, totalPrice:totalPrice, totalQty:totalQty, productId:productId})
  }

  const priceBeforeOngkir = detailProduct.totalPrice.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  const priceAfterOngkir = (detailProduct.totalPrice+17000).toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  const  handleClickBuy = () => {
    if(selectPayment !== null){
      Swal.fire({
        title: "Pesanan Berhasil Dibuat",
        text: "",
        icon: "success"
      });
      const dataToRemove = detailProduct.productId
      dataToRemove.map(item => (
        dispatch(removeCart(item))
      ))
    } else {
      Swal.fire({
        title: "Pilih metode pembayaran terlebih dahulu",
        text: "",
        icon: "warning"
      });
    }
  }

  const handleSelectPayment = (selectId) => {
    setSelectPayment(selectId)
    setTimeout(() => {
      setIsShowAllPayment(false)
    }, 150);
  }

  return (
    <div className='max-w-[1280px] relative mx-auto px-2 grid grid-cols-1 md:grid-cols-6 gap-y-3 md:gap-5'>
      <div className="col-span-4">
        <div className="address-box w-full pb-2 border shadow-sm rounded-lg mb-3">
          <div className="header flex items-center justify-between px-2 py-1 bg-slate-100">
            <h6>Alamat Pengiriman</h6>
            <button>Ubah</button>
          </div>
          <div className="content p-2">
            <div className="contact font-medium flex items-center gap-x-10 mb-3">
              <h6>Jimly Assidqi</h6>
              <h6>082329322353</h6>
            </div>
            <div className="address flex items-center gap-x-5">
              <h6 className='destination flex items-center text-[14px] md:text-normal px-2 justify-center pb-[2px] rounded-full bg-aksen text-white font-medium w-[80px]'>Rumah</h6>
              <p>Purwanegara, kec. Purwokerto Utara, Kab. Banyumas, Jawa Tengah</p>
            </div>
          </div>
        </div>
        <CheckoutProductBox products={productInformation}/>
      </div>
      <div className="relative payment-method col-span-2 w-full border shadow-sm rounded-lg p-3">
        <div className={`${isShowAllPayment? 'block':'hidden'} absolute right-3 top-3 all-payment-method w-[300px] rounded-lg bg-white border shadow-sm p-3`}>
          <div onClick={()=>setIsShowAllPayment(prev => !prev)} className="back absolute right-2 top-2 cursor-pointer w-6 h-6 rounded-full border flex justify-center items-center">X</div>
          <div className="list-payment mt-8">
            <div className="payment-item" onClick={()=>handleSelectPayment(5)}>
              <CardPayment logoPayment={mandiriLogo} paymentName={'Bank Mandiri'} selectPayment={selectPayment === 5}/>
            </div>
            <div className="payment-item" onClick={()=>handleSelectPayment(6)}>
              <CardPayment logoPayment={bcaLogo} paymentName={'Bank BCA'} selectPayment={selectPayment === 6}/>
            </div>
            <div className="payment-item" onClick={()=>handleSelectPayment(7)}>
              <CardPayment logoPayment={gopayLogo} paymentName={'Gopay'} selectPayment={selectPayment === 7}/>
            </div>
            <div className="payment-item" onClick={()=>handleSelectPayment(8)}>
              <CardPayment logoPayment={ovoLogo} paymentName={'OVO'} selectPayment={selectPayment === 8}/>
            </div>
            <div className="payment-item" onClick={()=>handleSelectPayment(9)}>
              <CardPayment logoPayment={linkajaLogo} paymentName={'Linkaja'} selectPayment={selectPayment === 9}/>
            </div>
            <div className="payment-item" onClick={()=>handleSelectPayment(10)}>
              <CardPayment logoPayment={akulakuLogo} paymentName={'Akulaku'} selectPayment={selectPayment === 10}/>
            </div>
            <div className="payment-item" onClick={()=>handleSelectPayment(11)}>
              <CardPayment logoPayment={kredivoLogo} paymentName={'Kredivo'} selectPayment={selectPayment === 11}/>
            </div>
            <div className="payment-item" onClick={()=>handleSelectPayment(12)}>
            <CardPayment logoPayment={indomaretLogo} paymentName={'Indomaret'} selectPayment={selectPayment === 12}/>
            </div>
          </div>
        </div>
        <div className="header flex items-center justify-between">
          <h5 className='font-medium'>Pilih Metode Pembayaran</h5>
          <button onClick={()=>setIsShowAllPayment(prev => !prev)} className='text-aksen'>Lihat semua metode {'>'}</button>
        </div>
        <div className="box-payment my-4">
          <div className="payment-item" onClick={()=>setSelectPayment(1)}>
            <CardPayment logoPayment={briLogo} paymentName={'Bank BRI'} selectPayment={selectPayment === 1}/>
          </div>
          <div className="payment-item" onClick={()=>setSelectPayment(2)}>
            <CardPayment logoPayment={bniLogo} paymentName={'Bank BNI'} selectPayment={selectPayment === 2}/>
          </div>
          <div className="payment-item" onClick={()=>setSelectPayment(3)}>
            <CardPayment logoPayment={danaLogo} paymentName={'Dana'} selectPayment={selectPayment === 3}/>
          </div>
          <div className="payment-item" onClick={()=>setSelectPayment(4)}>
            <CardPayment logoPayment={alfamartLogo} paymentName={'Alfamart'} selectPayment={selectPayment === 4}/>
          </div>
        </div>
        <VoucherBox />
        <div className="ringkasan-pesanan font-medium">
          <h1 className='text-[15px] mb-2'>Ringkasan Pesanan</h1>
          <div className="count-price pb-3">
            <div className="subtotal flex items-center justify-between">
              <h6 className='text-[14px] text-slate-500'>Subtotal ( {detailProduct.totalQty} Produk)</h6>
              <h5 className='text-[18px]'>{priceBeforeOngkir}</h5>
            </div>
            <div className="expedition-fee flex items-center justify-between pb-3 border-b">
              <h6 className='text-[14px] text-slate-500'>Biaya Pengiriman</h6>
              <h5 className='text-[18px]'>Rp17.000</h5>
            </div>
            <div className="total flex items-center justify-between pt-3">
              <h6 className='text-[14px] text-slate-500'>Total</h6>
              <h5 className='text-[18px]'>{priceAfterOngkir}</h5>
            </div>
          </div>
          <button onClick={()=>handleClickBuy(detailProduct)} className='w-full py-2 bg-aksen rounded-lg text-white'>Buat Pesanan</button>
        </div>
      </div>

      {/* popup success */}
      {createPesanan && 
        <div className="absolute popup-success px-5 py-8 left-1/2 top-1/2 transform -translate-x-1/2 bg-white border shadow-2xl rounded-lg flex flex-col justify-center items-center w-[90%] md:w-[40%]">
          <FaCheckCircle size={60} className='text-green-500 mx-auto'/>
          <h4 className='font-medium text-xl text-slate-700 my-5'>Pesanan Berhasil Dibuat</h4>
          <button onClick={()=>setCreatePesanan(false)} className='w-full bg-aksen py-2 text-white font-medium rounded-lg'>Selesai</button>
        </div>
      }

      {/* loading */}
      {isLoading && 
        <div className="loading absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-slate-600 bg-opacity-15">
          <div className="box px-[30px] py-[25px] bg-white rounded-md">
            <svg class="h-7 w-7 animate-spin stroke-slate-500" viewBox="0 0 256 256">
              <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
              <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="24"></line>
              <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="24"></line>
              <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="24"></line>
              <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
              <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
            </svg>
          </div>
        </div>
      }
    </div>
  )
}

export default Checkout