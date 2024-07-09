import React, { useState } from 'react'
import { FaBars, FaBox, FaBoxOpen, FaFileAlt, FaFileInvoice, FaHome, FaPlusCircle } from 'react-icons/fa'
import DetailTransaction from '../components/molecules/DetailTransaction'
import AddProductBox from '../components/molecules/AddProductBox'
import { barangNull, myProfilePic, transactionNull } from '../assets'

const Store = () => {
  const [isMenu, setIsMenu] = useState(1);
  const [isMenuMobile, setIsMenuMobile] = useState(false);

  const handleClickMenuMobile = (selectMenu) => {
    setIsMenu(selectMenu)
    setIsMenuMobile(false)
  }
  return (
    <div className='w-full px-2 grid grid-cols-1 md:grid-cols-10 -my-9 gap-y-3 md:gap-5 md:-mx-2'>
      <div className="flex relative md:hidden pt-5 items-center gap-3">
        <div onClick={()=> setIsMenuMobile(true)} className="menu-bars flex items-center justify-center cursor-pointer w-[40px] h-[40px] border rounded-md">
          <FaBars />
        </div>
        {isMenu === 1 && <h6>Ringkasan Transaksi</h6>}
        {isMenu === 2 && <h6>Transaksi</h6>}
        {isMenu === 3 && <h6>Jual Barang</h6>}
        {isMenu === 4 && <h6>Barang</h6>}
        <div className={`${isMenuMobile?'block':'hidden'} absolute top-[70px] w-full border rounded-md bg-white`}>
          <ul className='py-2 text-slate-700'>
            <li onClick={()=>handleClickMenuMobile(1)} className={`flex items-center gap-x-2 px-5 py-3 hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] ${isMenu === 1 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} cursor-pointer`}><FaHome size={23}/> <span className='text-[15px]'>Ringkasan</span></li>
            <li onClick={()=>handleClickMenuMobile(2)} className={`flex items-center gap-x-2 px-5 py-3 hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] ${isMenu === 2 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} cursor-pointer`}><FaFileInvoice size={20}/> <span className='text-[15px]'>Transaksi</span></li>
            <li onClick={()=>handleClickMenuMobile(3)} className={`flex items-center gap-x-2 px-5 py-3 hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] ${isMenu === 3 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} cursor-pointer`}><FaPlusCircle size={20}/> <span className='text-[15px]'>Jual Barang</span></li>
            <li onClick={()=>handleClickMenuMobile(4)} className={`flex items-center gap-x-2 px-5 py-3 hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] ${isMenu === 4 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} cursor-pointer`}><FaBoxOpen size={20}/> <span className='text-[15px]'>Barang</span></li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block col-span-3 lg:col-span-2 w-full h-[93.2vh] border">
        <div className="header flex items-center gap-x-3 font-medium bg-slate-100 p-3">
          <div className="profil-pic w-10 h-10 rounded-full border shadow-sm overflow-hidden"><img src={myProfilePic} className='w-full h-full object-cover' /></div>
          <h4 className='text-lg'>Waluyo</h4>
        </div>
        <div className="menu font-medium">
          <ul className='py-5 mt-3 text-slate-700'>
            <li onClick={()=>setIsMenu(1)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenu === 1 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} cursor-pointer`}><FaHome size={23}/> <span className='text-[15px]'>Ringkasan</span></li>
            <li onClick={()=>setIsMenu(2)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenu === 2 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} cursor-pointer`}><FaFileInvoice size={20}/> <span className='text-[15px]'>Transaksi</span></li>
            <li onClick={()=>setIsMenu(3)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenu === 3 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} cursor-pointer`}><FaPlusCircle size={20}/> <span className='text-[15px]'>Jual Barang</span></li>
            <li onClick={()=>setIsMenu(4)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenu === 4 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} cursor-pointer`}><FaBoxOpen size={20}/> <span className='text-[15px]'>Barang</span></li>
          </ul>
        </div>
      </div>
      <main className='col-span-7 lg:col-span-8 w-full py-5'>
        {isMenu === 1 &&
          <div className="detail-transaksi grid lg:grid-cols-2 gap-5 mb-5">
            <DetailTransaction title={'Ringkasan Transaksi'} col1={'Pesanan Baru'} col2={'Di Proses'} col3={'Komplain/Retur'}/>
            <DetailTransaction title={'Daftar Barang'} col1={'Barang Dijual'} col2={'Tidak Dijual'} col3={'Barang Draft'}/>
            <div className='bg-aksen rounded-lg'></div>
          </div>
        }
        {isMenu === 2 &&
          <div className="transaction gap-x-5 mb-5">
            <div className='border shadow-sm rounded-lg'>
              <div className="header p-3 border-b font-medium"><h5>Transaksi</h5></div>
              <div className="main flex justify-center items-center py-10">
                <div className='text-center'>
                  <img src={transactionNull} className='w-[300px]' />
                  <p className=''>Belum Ada Transaksi</p>
                </div>
              </div>
            </div>
          </div>
        }
        {isMenu === 3 &&
            <AddProductBox />
        }
        {isMenu === 4 &&
          <div className="product-list gap-x-5 mb-5">
            <div className='border shadow-sm rounded-lg'>
              <div className="header p-3 border-b font-medium"><h5>Daftar Barang</h5></div>
              <div className="main flex justify-center items-center pb-5">
                <div className='text-center'>
                  <img src={barangNull} alt="" />
                  <p className=''>Belum ada barang yang di jual</p>
                </div>
              </div>
            </div>
          </div>
        }
      </main>
    </div>
  )
}

export default Store