import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaCartPlus, FaHome, FaSearch, FaStoreAlt, FaUserAlt } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { logoText } from '../../assets'

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const totalProduct = useSelector((state) => state.cart.listCart.length)
  return (
    <div className='w-[100%] bg-aksen fixed top-0 z-20'>
      <div className="max-w-[1280px] flex justify-between items-center mx-auto py-3 px-5 gap-5">
        <div className="logo hidden md:block">
          <Link to={'/home'}>
            <img src={logoText} className='w-[150px]' />
          </Link>
        </div>
        <div className="box-search flex items-center justify-around bg-white rounded-full p-2 px-5">
          <input type="text" className='bg-transparent w-[90%] sm:w-[300px] border-none outline-none font-medium' placeholder='Perahu'/>
          <FaSearch className='text-slate-600'/>
        </div>
        <div className="menu hidden sm:flex items-center justify-end gap-5">
          <Link to={'/cart'}>
            <div className="relative cart p-2 border rounded text-white">
              <FaCartPlus size={18}/>
              <div className="absolute top-[-9px] right-[-9px] w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[11px] font-medium flex items-center justify-center">
                {totalProduct}
              </div>
            </div>
          </Link>
          <Link to={'/store'}>
            <div className="store p-2 border rounded text-white">
              <FaStoreAlt size={18}/>
            </div>
          </Link>
          <Link to={'/profile'}>
            <div className="profile p-2 border rounded text-white">
              <FaUserAlt size={18}/>
            </div>
          </Link>
        </div>
        <div onClick={()=> setIsMenu(prev => !prev)} className="menu-bar sm:hidden p-2 border rounded text-white relative">
          <FaBars size={18}/>
          <div className={`${isMenu? 'block': 'hidden'} absolute w-[250px] right-0 top-10 p-2 bg-white border-2 border-slate-500 rounded-lg`}>
            <Link to={'/home'}>
              <div className="home flex items-center gap-2 p-2 py-3 mb-2 font-medium border rounded text-slate-700">
                <FaHome size={18}/>
                <h6>Home</h6>
              </div>
            </Link>
            <Link to={'/cart'}>
              <div className="cart flex items-center gap-2 p-2 py-3 mb-2 font-medium border rounded text-slate-700">
                <FaCartPlus size={18}/>
                <h6>Keranjang</h6>
                
              </div>
            </Link>
            <Link to={'/store'}>
              <div className="storet flex items-center gap-2 p-2 py-3 mb-2 font-medium border rounded text-slate-700">
                <FaStoreAlt size={18}/>
                <h6>Toko</h6>
              </div>
            </Link>
            <Link to={'/profile'}>
              <div className="profilet flex items-center gap-2 p-2 py-3 mb-2 font-medium border rounded text-slate-700">
                <FaUserAlt size={18}/>
                <h6>Profile</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar