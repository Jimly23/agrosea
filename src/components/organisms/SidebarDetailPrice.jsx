import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import {useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addCart } from '../../reducers/cartReducers';
import { getProducts } from '../../api/api';
import Swal from 'sweetalert2';

const SidebarDetailPrice = ({productId, productImage, productName, priceAfterDiscount}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [qty, setQty] = useState(1);
  const [subTotal, setSubTotal] = useState(priceAfterDiscount);

  const handleClickCart = () => {
    const getProduct = getProducts().find(p => p.id === productId)
    const product = {
      id: getProduct.id,
      toko: getProduct.toko,
      productName: getProduct.productName,
      productImage: getProduct.productImage[0],
      priceAfterDiscount: getProduct.priceAfterDiscount,
      qty: qty,
      total: getProduct.priceAfterDiscount
    }
    Swal.fire({
      title: "Berhasil Ditambahkan",
      text: "",
      icon: "success"
    });
    dispatch(addCart(product))
  }

  const handleAddQuantity = () => {
    setQty(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      setSubTotal(priceAfterDiscount * newQuantity);  // Update subTotal with the new quantity
      return newQuantity;
    });
  }

  const handleReduceQuantity = () => {
    setQty(prevQuantity => {
      const newQuantity = prevQuantity - 1;
      setSubTotal(subTotal - priceAfterDiscount)
      return newQuantity
    })
  }

  const handleNavigate = () => {
    navigate('/checkout', {state: {productName, priceAfterDiscount, productImage, qty}})
  }

  return (
    <div className="sidebar-detail-price col-span-10 lg:col-span-2 w-full h-[290px] border border-slate-300 shadow-sm rounded-lg p-3">
      <h4 className='font-medium text-lg mb-2'>Atur jumlah</h4>
      <div className="qty font-medium mb-3">
        <div className="box-qty flex items-center justify-between px-4 py-2 border rounded-lg">
          <h6 className='text-[14px]'>Quantity</h6>
          <div className="count flex items-center gap-x-5">
            {qty === 1? 
              <FaMinus className={` text-slate-600 opacity-50 cursor-pointer`} size={15}/>
            : 
              <button onClick={handleReduceQuantity} className={`text-slate-600 cursor-pointer`}>
                <FaMinus size={15}/>
              </button>
            }
            <div><h6>{qty}</h6></div>
            <button onClick={handleAddQuantity} className='text-slate-600 cursor-pointer'>
              <FaPlus size={15}/>
            </button>
          </div>
        </div>
      </div>
      <div className="stok font-medium text-[15px] mb-2">
        <h6>Stok tersisa : 1229</h6>
      </div>
      <div className="subtotal mb-5 text-lg flex items-center justify-between font-medium">
        <h5>Subtotal</h5>
        <h4>Rp{subTotal}</h4>
      </div>
      <button onClick={handleClickCart} className='border mb-2 border-aksen rounded-lg text-center w-full py-2 font-medium text-aksen'>+ Keranjang</button>
      <button onClick={handleNavigate} className=' text-white mb-2 rounded-lg text-center w-full py-2 font-medium bg-aksen'>Beli</button>
    </div>
  )
}

export default SidebarDetailPrice