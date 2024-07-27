import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import CardPayment from '../components/molecules/CardPayment'
import CheckoutProductBox from '../components/template/CheckoutProductBox'
import { akulakuLogo, alfamartLogo, bcaLogo, bniLogo, briLogo, danaLogo, gopayLogo, indomaretLogo, kredivoLogo, linkajaLogo, mandiriLogo, ovoLogo } from '../assets'
import VoucherBox from '../components/molecules/VoucherBox'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { addProductAfterCheckout, removeCart } from '../reducers/cartReducers'
import { getUserById } from '../api/api'
import Loading from '../components/molecules/Loading'

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userID = Cookies.get('userID');
  const productInformation = location.state || null;
  const [createPesanan, setCreatePesanan] = useState(false);
  const [selectPayment, setSelectPayment] = useState(null);
  const [isShowAllPayment, setIsShowAllPayment] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [detailProduct, setDetailProduct] = useState({totalPrice: 0, totalQty:0, productId: []})
  const [addresses, setAddresses] = useState([{username:'',noHp:'',fullAddress:'',subdistrict:'',city:'',province:''}])

  useEffect(() => {
    // Fetch existing addresses
    const fetchAddresses = async () => {
      try {
        const response = await getUserById(userID);
        setAddresses(response.address);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAddresses();
  }, []);

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
    if(addresses.length === 0){
      Swal.fire({
        title: "Anda belum menambahkan alamat",
        text: "",
        icon: "warning"
      });
    }else{
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
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
          navigate('/profile', {state: true})
        }, 3000);
  
        dispatch(addProductAfterCheckout(productInformation))
      } else {
        Swal.fire({
          title: "Pilih metode pembayaran terlebih dahulu",
          text: "",
          icon: "warning"
        });
      }
    }
  }

  const handleSelectPayment = (selectId) => {
    setSelectPayment(selectId)
    setTimeout(() => {
      setIsShowAllPayment(false)
    }, 150);
  }

  return (
    <>
      <div className='max-w-[1280px] relative mx-auto px-2 grid grid-cols-1 md:grid-cols-6 gap-y-3 md:gap-5'>
        <div className="col-span-4">
          <div className="address-box w-full pb-2 border shadow-sm rounded-lg mb-3">
            <div className="header flex items-center justify-between px-2 py-1 bg-slate-100">
              <h6>Alamat Pengiriman</h6>
              {/* <button>Ubah</button> */}
            </div>
            <div className="content p-2">
              {addresses.length === 0?
              <div className='py-5 flex items-center gap-x-5'>
                <h5>Belum menambahkan alamat</h5>
                <Link to={'/profile'}><p className='px-3 py-1 rounded-lg bg-aksen text-white text-[14px]'>Tambah alamat</p></Link>
              </div>
              :
              <>
                <div className="contact font-medium flex items-center gap-x-10 mb-3">
                  <h6>{addresses[0].username}</h6>
                  <h6>{addresses[0].noHp}</h6>
                </div>
                <div className="address flex items-center gap-x-5">
                  <h6 className='destination flex items-center text-[14px] md:text-normal px-2 justify-center pb-[2px] rounded-full bg-aksen text-white font-medium w-[80px]'>Rumah</h6>
                  <p>{addresses[0].fullAddress}, {addresses[0].subdistrict}, {addresses[0].city}, {addresses[0].province}</p>
                </div>
              </>
              }
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
          <div className="header flex items-center justify-between text-[14px]">
            <h5 className='font-medium text-[16px]'>Pilih Metode Pembayaran</h5>
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

      </div>
      {/* loading */}
      {isLoading && 
        <Loading />
      }
    </>
  )
}

export default Checkout