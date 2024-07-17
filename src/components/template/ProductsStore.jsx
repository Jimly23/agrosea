import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { getProductByUserId } from '../../api/api'
import { barangNull } from '../../assets'
import AddProductBox from '../molecules/AddProductBox'
import { FaChevronLeft } from 'react-icons/fa'


const ProductsStore = () => {
  const [products, setProducts] = useState([])
  const [detailProduct, setDetailProduct] = useState(null)

  useEffect(()=>{
    getProducts()
  },[])

  const getProducts = async () => {
    const userID = Cookies.get('userID');
    const response = await getProductByUserId(String(userID))
    setProducts([...response])
  }
  return (
    <div className='border shadow-sm rounded-lg bg-white min-w-[900px]'>
      <div className="header p-3">
        <h5 className='text-lg font-medium'>Daftar Barang</h5>
      </div>

      {/* filter box */}
      <div className="filter-box font-medium text-[14px] mb-5 p-3 grid grid-cols-5 gap-3">
        <input type="text" placeholder='Filter By Nama Produk' className='border rounded-md shadow-sm outline-none px-4 py-2 w-full' />
        <input type="text" placeholder='Filter By Kategori' className='border rounded-md shadow-sm outline-none px-4 py-2 w-full' />
        <button className='border rounded-md shadow-sm outline-none px-4 py-2 w-full bg-aksen text-white'>Cari</button>
      </div>

      <main>
        {products.length == 0?
          <div className='text-center flex justify-center flex-col items-center py-5 border-t'>
            <img src={barangNull} alt="" />
            <p className=''>Belum ada barang yang di jual</p>
          </div>
          :
          <>
            {detailProduct?
              <div className="detail-product p-5 border-t">
                <div className="header flex items-center gap-x-5 mb-5 text-aksen">
                  <div onClick={()=>setDetailProduct(null)} className="back p-2 cursor-pointer hover:bg-blue-200 border border-blue-300 hover:border-blue-300 rounded-lg">
                    <FaChevronLeft />
                  </div>
                  <h6 className='font-medium text-md'>Detail Produk</h6>
                </div>
                <AddProductBox updateProduct={detailProduct}/>
              </div>
              :
              <>
                <div className="column-name grid grid-cols-6 font-medium p-5 bg-slate-200">
                  <h6>No</h6>
                  <h6>Produk</h6>
                  <h6>Kategori</h6>
                  <h6>Harga</h6>
                  <h6>Stok</h6>
                  <h6>Aksi</h6>
                </div>

                <div className="product-list">
                  {products.map((item, index)=>(
                    <div className="column-name grid grid-cols-6 text-[14px] p-5 hover:bg-slate-100 border-b">
                      <h6>{index+1}</h6>
                      <h6>{item.productName}</h6>
                      <h6>{item.category}</h6>
                      <h6>Rp{item.price}</h6>
                      <h6>{item.stock}</h6>
                      <button onClick={()=>setDetailProduct(item)} className='py-1 rounded-md border border-orange-400 hover:bg-orange-400 font-medium text-orange-400 mt-[-5px] hover:text-white w-[100px]'>Detail</button>
                    </div>
                  ))}
                </div>
              </>
            }  
          </>
        }
      </main>
    </div>
  )
}

export default ProductsStore