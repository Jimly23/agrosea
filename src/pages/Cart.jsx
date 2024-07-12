import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck, FaMinus, FaPlus, FaRecycle, FaSquare, FaTrashAlt } from 'react-icons/fa'
import VoucherBox from '../components/molecules/VoucherBox';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/template/Footer';
import { deleteProductInCart } from '../reducers/cartReducers';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listCart = useSelector((state) => state.cart.listCart)

  const [isAllProduct, setIsAllProduct] = useState(false)
  const [isSelectProduct, setIsSelectProduct] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [productInformation, setProductInformation] = useState([])
  const [productList, setProductList] = useState(listCart)
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(()=>{
    setProductList(listCart)
  }, [listCart])

  useEffect(()=>{
    if(selectedId !== null){
      cek(selectedId)
    }
  }, [productList])
  
  const cek = (id) => {
    if(isSelectProduct){
      const product = productList.find(p => p.id === id)
      setTotalPrice(product.total)
    }
  }

  const handleAddQuantity = (id) => {
    setProductList(prevProducts => 
      prevProducts.map(product => 
        product.id === id? {...product, qty: product.qty + 1, total: (product.qty + 1) * product.priceAfterDiscount}:product
      )
    );
    setSelectedId(id)
  }

  const handleReduceQuantity = (id, price) => {
    setProductList(prevProducts => 
      prevProducts.map(product => 
        product.id === id? {...product, qty: product.qty - 1, total: (product.qty - 1) * product.priceAfterDiscount}:product
      )
    );
    setSelectedId(id)
  }

  const handleAllProduct = () => {
    if(!isAllProduct){
      let checkPrice = 0;
      productList.map((item) => (
        checkPrice += item.priceAfterDiscount * item.qty
      ))

      setTotalPrice(checkPrice)
      setProductInformation(productList)
      setIsAllProduct(!isAllProduct)
    } else {
      setIsAllProduct(!isAllProduct)
      setTotalPrice(0)
    }
  }

  const handleSelectProduct = (item) => {
    if(isSelectProduct === item.id){
      setIsSelectProduct(null)
      setTotalPrice(0)
    } else if (isSelectProduct !== null) {
      setIsSelectProduct(item.id)
      setTotalPrice(item.priceAfterDiscount * item.qty)
      setProductInformation([...productInformation, item])
    } else {
      setIsSelectProduct(item.id)
      setTotalPrice(item.priceAfterDiscount * item.qty)
      const product = productList.find(p => p.id == item.id)
      setProductInformation([...productInformation, product])
    }
  }

  const handleCheckout = () => {
    if(isSelectProduct || isAllProduct){
      navigate('/checkout', {state: productInformation})
    } else {
      alert("Pilih Produk Terlebih Dahulu")
    }
  }

  return (
    <>
      <div className='max-w-[1280px] min-h-[90vh] mx-auto px-2 grid grid-cols-1 md:grid-cols-6 gap-y-3 md:gap-5'>
        <div className="detail-cart-product col-span-4">
          <div className="h-[50px] border shadow-sm rounded-lg flex items-center gap-x-3 px-3 font-medium mb-3">
            <div onClick={handleAllProduct} className={`cursor-pointer checkbox w-5 h-5 border-[1px] border-slate-400 rounded flex items-center justify-center text-white ${isAllProduct && 'bg-aksen border-none'}`}>{isAllProduct && <FaCheck size={13}/>}</div>
            <h5 className='select-none'>Pilih Semua (1)</h5>
          </div>
          <div className="box-list-product select-none">
            {productList.map((item, index) => (
              <div key={index} className="product-item border rounded-lg shadow-sm p-3 mb-3 pt-6">
                <div className="flex items-center mb-3 gap-x-3">
                  <div onClick={()=>handleSelectProduct(item)} className={`cursor-pointer checkbox w-5 h-5 border-[1px] border-slate-400 rounded flex items-center justify-center text-white ${isAllProduct && 'bg-aksen border-none' || isSelectProduct === item.id && 'bg-aksen border-none'}`}>{isAllProduct && <FaCheck size={13}/> || isSelectProduct === item.id && <FaCheck size={13}/>}</div>
                  <div className="box-product grid grid-cols-1 md:grid-cols-10 w-full">
                    <div className="product-image col-span-2 w-[70px] h-[70px] rounded overflow-hidden mb-3 md:mb-0"><img src={item.productImage} className='w-full h-full object-cover' alt="" /></div>
                    <div className="product-desc col-span-5 lg:col-span-6">
                      <h6 className='font-medium'>Toko {item.toko}</h6>
                      <p>{item.productName}</p>
                    </div>
                    <div className="product-price col-span-3 lg:col-span-2 font-medium text-lg">
                      <h6 className='text-center'>Rp{item.priceAfterDiscount}</h6>
                      <div className="box-qty flex items-center justify-start gap-x-3 mt-2">
                        <button onClick={()=>dispatch(deleteProductInCart(item.id))} className='text-red-600'><FaTrashAlt /></button>
                        <div className="count flex items-center gap-x-5 border px-4 rounded-lg">
                          {item.qty === 1?
                            <button className={` text-slate-600 opacity-50 cursor-pointer`} >
                              <FaMinus size={10}/>
                            </button>
                            :
                            <button onClick={()=>handleReduceQuantity(item.id, item.priceAfterDiscount)} className={`text-slate-600 cursor-pointer`}>
                              <FaMinus size={10}/>
                            </button>
                          }
                          <div><h6>{item.qty}</h6></div>
                          <button onClick={()=>handleAddQuantity(item.id)} className='text-slate-600 cursor-pointer'>
                            <FaPlus size={10}/>
                          </button> 
                          {/* {isSelectProduct === item.id? 
                            <>
                              {quantity === 1? 
                                <button className={` text-slate-600 opacity-50 cursor-pointer`} >
                                  <FaMinus size={10}/>
                                </button>
                              : 
                                <button onClick={()=>handleReduceQuantity(item.id, item.priceAfterDiscount)} className={`text-slate-600 cursor-pointer`}>
                                  <FaMinus size={10}/>
                                </button>
                              }
                              <div><h6>{item.qty}</h6></div>
                              <button onClick={()=>handleAddQuantity(item.id)} className='text-slate-600 cursor-pointer'>
                                <FaPlus size={10}/>
                              </button> 
                            </>
                            :
                            <> 
                              <button className={` text-slate-600 opacity-50 cursor-pointer`} >
                                <FaMinus size={10}/>
                              </button>
                              <div><h6>{item.qty}</h6></div>
                              <button className='text-slate-600 cursor-pointer'>
                                <FaPlus size={10}/>
                              </button>
                            </>
                          } */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="detail-product-price col-span-2 w-full font-medium">
          <div className="box-detail-price border shadow-sm p-4 pb-5 rounded-lg">
            <h4 className='text-xl border-b pb-3 mb-3'>Ringkasan Pesanan</h4>
            <VoucherBox />
            <div className="total flex items-center justify-between py-3">
              <h6 className='text-[14px] text-slate-500'>Total</h6>
              <h5 className='text-[18px]'>Rp{totalPrice}</h5>
            </div>
            <button onClick={handleCheckout} className='w-full py-2 bg-aksen rounded-lg text-white'>Beli</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart