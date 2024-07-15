import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaBook, FaCartPlus, FaHome, FaSearch, FaStoreAlt, FaUserAlt } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { logoText, searchProduct } from '../../assets'
import { getProducts, getProductsById, getProductsByName } from '../../api/api'

const Navbar = () => {
  const navigate = useNavigate()
  const [isMenu, setIsMenu] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false)
  const [term, setTerm] = useState('')
  const [listProductSearch, setListProductSearch] = useState([])
  const totalProduct = useSelector((state) => state.cart.listCart.length)
  const [placeholder, setPlaceholder] = useState('Benih ikan lele');
  
  useEffect(() => {
    const placeholders = [
      'Benih ikan lele',
      'Cabai',
      'Bibit herbal',
      'Kit hidroponik fullset',
      'Udang'
    ];

    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % placeholders.length;
      setPlaceholder(placeholders[index]);
    }, 5000); // Ubah setiap 5 detik

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e) => {
    const term = e.target.value.toLowerCase()
    setTerm(term)
    const products = getProducts()
    const result = products.filter(p => p.productName.toLowerCase().includes(term))
    setListProductSearch(result)
  }

  const handleSelectProduct = (id) => {
    const product = getProductsById(id)
    navigate('/detail-product', {state: product})
    setIsShowSearch(false)
  }

  return (
    <div className='w-[100%] bg-aksen fixed top-0 z-20'>
      <div className="max-w-[1280px] flex justify-between items-center mx-auto py-4 px-5 gap-5">
        <div className="logo hidden md:block">
          <Link to={'/home'}>
            <img src={logoText} className='w-[150px]' />
          </Link>
        </div>
        <div onClick={()=>setIsShowSearch(true)} className="box-search flex items-center justify-around bg-white rounded-full p-2 px-5">
          <input onChange={handleChange} type="text" className='bg-transparent w-[90%] sm:w-[300px] border-none outline-none font-medium' placeholder={placeholder}/>
          <FaSearch className='text-slate-600'/>
        </div>
        <div className="menu hidden sm:flex items-center justify-end gap-5">
          <Link to={'/cart'}>
            <div className="relative cart p-2 border rounded text-white">
              <FaCartPlus size={18}/>
              {totalProduct !== 0 && 
                <div className="absolute top-[-9px] right-[-9px] w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[11px] font-medium flex items-center justify-center">
                  {totalProduct}
                </div>
              }
            </div>
          </Link>
          <Link to={'/store'}>
            <div className="store p-2 border rounded text-white">
              <FaStoreAlt size={18}/>
            </div>
          </Link>
          <a href="/education" target="_blank" rel="noopener noreferrer">
            <div className="store p-2 border rounded text-white">
              <FaBook size={18}/>
            </div>
          </a>
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
      {isShowSearch && 
        <div onClick={()=> setIsShowSearch(false)} className="box-popup-search absolute h-screen left-0 right-0 top-[67px] bottom-0 bg-black bg-opacity-50">
          <div onClick={(e) => e.stopPropagation()} className="popup-search w-full max-w-[800px] min-h-[300px] max-h-[80vh] rounded-lg bg-white border p-5 absolute left-1/2 transform -translate-x-1/2 overflow-hidden">
            {term !== '' ?
              <ul>
                {listProductSearch.map((item,index) => (
                  <li key={index} onClick={()=>handleSelectProduct(item.id)} className='flex items-center gap-x-2 p-2 mb-2 rounded-lg hover:bg-slate-100 cursor-pointer'>
                    <img src={item.productImage[0]} className='w-[80px] h-[80px] rounded-md border' />
                    <p>{item.productName}</p>
                  </li>
                ))}
              </ul>
              :
              <div className="flex justify-center flex-col items-center">
                <h5 className='font-medium text-lg text-slate-700'>Cari produk apa?</h5>
                <img src={searchProduct} className='w-[50%]' />
              </div>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar