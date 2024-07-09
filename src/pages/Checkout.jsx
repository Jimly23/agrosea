import React, { useState } from 'react'
import { FaCheck, FaCheckCircle, FaIdCard } from 'react-icons/fa'
import CardPayment from '../components/molecules/CardPayment'
import CheckoutProductBox from '../components/template/CheckoutProductBox'
import { danaPayment, debitPayment } from '../assets'
import VoucherBox from '../components/molecules/VoucherBox'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'

const Checkout = () => {
  const location = useLocation();
  const productInformation = location.state || null
  console.log(productInformation);
  const [createPesanan, setCreatePesanan] = useState(false);
  const [selectPayment, setSelectPayment] = useState(1);

  const  handleClickBuy = () => {
    Swal.fire({
      title: "Pesanan Berhasil Dibuat",
      text: "",
      icon: "success"
    });
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
              <p>Dk.Gardu, Desa Buniwah, Kec.Sirampog, Kab.Brebes · Buniwah, Sirampog, Kab. Brebes, Jawa Tengah</p>
            </div>
          </div>
        </div>
        <CheckoutProductBox products={productInformation}/>
      </div>
      <div className="payment-method col-span-2 w-full border shadow-sm rounded-lg p-3">
        <div className="header flex items-center justify-between">
          <h5 className='font-medium'>Pilih Metode Pembayaran</h5>
          <button className='text-aksen'>Lihat semua metode {'>'}</button>
        </div>
        <div className="box-payment my-4">
          <div className="payment-item" onClick={()=>setSelectPayment(1)}>
            <CardPayment logoPayment={debitPayment} paymentName={'Kartu Kredit/Debit'} selectPayment={selectPayment}/>
          </div>
        </div>
        <VoucherBox />
        <div className="ringkasan-pesanan font-medium">
          <h1 className='text-[15px] mb-2'>Ringkasan Pesanan</h1>
          <div className="count-price pb-3">
            <div className="subtotal flex items-center justify-between">
              <h6 className='text-[14px] text-slate-500'>Subtotal ( {productInformation.qty} Produk)</h6>
              <h5 className='text-[18px]'>Rp{productInformation.priceAfterDiscount*productInformation.qty}</h5>
            </div>
            <div className="expedition-fee flex items-center justify-between pb-3 border-b">
              <h6 className='text-[14px] text-slate-500'>Biaya Pengiriman</h6>
              <h5 className='text-[18px]'>Rp17.000</h5>
            </div>
            <div className="total flex items-center justify-between pt-3">
              <h6 className='text-[14px] text-slate-500'>Total</h6>
              <h5 className='text-[18px]'>Rp{(productInformation.qty*productInformation.priceAfterDiscount)+17000}</h5>
            </div>
          </div>
          <button onClick={handleClickBuy} className='w-full py-2 bg-aksen rounded-lg text-white'>Buat Pesanan</button>
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
  )
}

export default Checkout