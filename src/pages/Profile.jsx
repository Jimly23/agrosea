import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaBars, FaBox, FaBoxOpen, FaCreditCard, FaFileInvoice, FaHome, FaLaptop, FaLock, FaMap, FaPlusCircle, FaRegIdCard, FaStar, FaStoreAlt, FaTruck, FaUser, FaWallet } from 'react-icons/fa';
import { FaComputer, FaMapLocation, FaMapLocationDot, FaRightFromBracket, FaStore } from 'react-icons/fa6';
import InputBox from '../components/Atoms/InputBox';
import { boxOpenVector, myProfilePic, starVector, trukVector, vectorStore, walletVector } from '../assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../reducers/authReducers';
import Cookies from 'js-cookie'
import { getUserById } from '../api/api';


const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userID = Cookies.get('userID');
  const getListProduct = useSelector((state) => state.cart.listProductAfterChcekout)

  const [userLogin, setUserLogin] = useState({})
  const [isMenuProfile, setIsMenuProfile] = useState(location.state? 3 : 1);
  const [isMenuProfileMobile, setIsMenuProfileMobile] = useState(false);
  const [onAddAddress, setOnAddAddress] = useState(false);
  const [addresses, setAddresses] = useState([])
  const [newAddress, setNewAddress] = useState({
    username:'',
    noHp:'',
    province:'',
    city:'',
    subdistrict:'',
    fullAddress:''
  })
  const [isMenuOrder, setIsMenuOrder] = useState(2)

  useEffect(()=> {
    getUserData()
  }, [])

  const getUserData = async() => {
    if (userID) {
      const response = await getUserById(userID)
      setUserLogin(response)
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await getUserById(userID);
      setAddresses(response.address);
    } catch (error) {
      return error
    }
  };

  // useEffect(()=>{
    console.log(addresses);
  // }, [addresses])

  const handleChange = (e) => {
    setNewAddress({...newAddress, [e.target.name]: e.target.value})
  }

  const handleAddAddress = async(e) => {
    e.preventDefault()
    try {
      const updatedAddresses = [...addresses, newAddress];
      await axios.put(`https://668fb31ec0a7969efd992601.mockapi.io/api/v1/users/${userID}`, {
        address: updatedAddresses
      });
      setOnAddAddress(false)
    } catch (error) {
      return error
    }
  } 

  const handleClickMenuProfileMobile = (selectMenu) => {
    setIsMenuProfile(selectMenu)
    setIsMenuProfileMobile(false)
  }

  const handleLogout = () => {
    navigate('/')
    Cookies.remove('userID');
    dispatch(setAuth(false))
  }

  return (
    <>
      <div className='px-2 grid grid-cols-1 lg:grid-cols-10 gap-y-3 md:gap-5 -my-7 bg-bg min-h-[92.5vh]'>
        <div className="flex absolute md:hidden pt-5 items-center gap-3">
          <div onClick={()=> setIsMenuProfileMobile(true)} className="menu-bars flex items-center justify-center cursor-pointer w-[40px] h-[40px] border rounded-md">
            <FaBars />
          </div>
          {isMenuProfile === 1 && <h6>Biodata Diri</h6>}
          {isMenuProfile === 2 && <h6>Daftar Alamat</h6>}
          {isMenuProfile === 3 && <h6>Pesanan Saya</h6>}
          {isMenuProfile === 4 && <h6>Toko Favorit</h6>}
          {isMenuProfile === 5 && <h6>Keamanan</h6>}
          <div className={`${isMenuProfileMobile?'block':'hidden'} z-40 absolute top-[70px] w-[200px] border rounded-md bg-white`}>
            <ul className='py-2 mt-3 font-medium text-slate-600'>
              <li onClick={()=>handleClickMenuProfileMobile(1)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenuProfile === 1 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] cursor-pointer`}><FaUser size={20}/> <span className='text-[15px]'>Biodata Diri</span></li>
              <li onClick={()=>handleClickMenuProfileMobile(2)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenuProfile === 2 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] cursor-pointer`}><FaMapLocationDot size={20}/> <span className='text-[15px]'>Daftar Alamat</span></li>
              <li onClick={()=>handleClickMenuProfileMobile(3)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenuProfile === 3 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] cursor-pointer`}><FaBoxOpen size={20}/> <span className='text-[15px]'>Pesanan Saya</span></li>
              <li onClick={()=>handleClickMenuProfileMobile(4)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenuProfile === 4 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] cursor-pointer`}><FaStore size={20}/> <span className='text-[15px]'>Toko Favorit</span></li>
              <li onClick={()=>handleClickMenuProfileMobile(5)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenuProfile === 5 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] cursor-pointer`}><FaLock size={20}/> <span className='text-[15px]'>Keamanan</span></li>
              <li onClick={handleLogout} className={`flex items-center gap-x-2 px-5 py-3 text-red-500 cursor-pointer`}><FaRightFromBracket size={20}/> <span className='text-[15px]'>Logout</span></li>
            </ul>
          </div>
        </div>

        {/* sidebar */}
        <div className="hidden md:block fixed top-[75px] left-0 bottom-0 md:w-[28%] lg:w-[18.5%] bg-white">
          <div className="header flex items-center gap-x-3 font-medium border-b p-3">
            <div className="profil-pic w-8 h-8 rounded-full border shadow-sm overflow-hidden"><img src={myProfilePic} className='w-full h-full object-cover' /></div>
            <h4 className='text-md'>{userLogin.username?userLogin.username:''}</h4>
          </div>
          <div className="menu">
            <ul className='py-5 mt-3 font-medium text-slate-600'>
              <li onClick={()=>setIsMenuProfile(1)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenuProfile === 1 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px]  cursor-pointer`}><FaUser size={20}/> <span className='text-[15px]'>Biodata Diri</span></li>
              <li onClick={()=>setIsMenuProfile(2)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenuProfile === 2 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px]  cursor-pointer`}><FaMapLocationDot size={20}/> <span className='text-[15px]'>Daftar Alamat</span></li>
              <li onClick={()=>setIsMenuProfile(3)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenuProfile === 3 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px]  cursor-pointer`}><FaBoxOpen size={20}/> <span className='text-[15px]'>Pesanan Saya</span></li>
              <li onClick={()=>setIsMenuProfile(4)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenuProfile === 4 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px]  cursor-pointer`}><FaStore size={20}/> <span className='text-[15px]'>Toko Favorit</span></li>
              <li onClick={()=>setIsMenuProfile(5)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenuProfile === 5 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px]  cursor-pointer`}><FaLock size={20}/> <span className='text-[15px]'>Keamanan</span></li>
              <li onClick={handleLogout} className={`flex items-center gap-x-2 px-5 py-3 text-red-500 cursor-pointer`}><FaRightFromBracket size={20}/> <span className='text-[15px]'>Logout</span></li>
            </ul>
          </div>
        </div>

        <main className='md:col-start-2 lg:col-start-3 col-span-7 lg:col-span-8 py-5 mt-14 md:mt-0'>
          {isMenuProfile === 1 && 
            <div className="personal-information grid grid-cols-1 lg:grid-cols-10 lg:gap-3 bg-white p-5 border shadow-sm rounded-lg">
              <div className="col-span-3 mb-10 lg:mb-0 p-3 border rounded-md bg-slate-100">
                <div className="box-img mx-auto h-[300px] md:h-[200px] lg:h-[300px] rounded-lg mb-2 overflow-hidden">
                  <img src={myProfilePic} alt="" className='w-full h-full object-cover' />
                </div>
                <button className='px-3 py-1 rounded-md border text-[14px] text-slate-600 font-medium'>Pilih Foto</button>
              </div>
              <div className='col-span-7'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-medium">
                  <InputBox title={'Nama Depan'} placeholder={userLogin.username?userLogin.username:''}/>
                  <InputBox title={'Nama Belakang'} placeholder={'Masukan nama belakang anda'}/>
                  <div className="email md:col-span-2"><InputBox title={'Email'} placeholder={userLogin.email?userLogin.email:''}/></div>
                  <InputBox title={'Telepon'} placeholder={'Masukan nomor telepon'}/>
                  <div className="birthday-date">
                    <div className="header mb-1 flex items-center gap-x-1">
                      <h6 className='text-[13px]'>Tanggal Lahir</h6>
                    </div>
                    <input type="date" placeholder='Masukan nama produk' className='text-[14px] px-4 py-2 outline-none border rounded-md font-medium w-full'/>
                  </div>
                  <div className="button-box flex items-center gap-x-2">
                    <button className='px-3 py-1 rounded-md bg-aksen text-white'>Simpan</button>
                    <button className='px-3 py-1 rounded-md border border-aksen text-aksen'>Batal</button>
                  </div>
                </div>
              </div>
            </div>
          }
          {isMenuProfile === 2 && 
            <>
              <div className="border shadow-sm rounded-lg p-5 bg-white">
                <button onClick={()=>setOnAddAddress(true)} className='px-3 py-1 rounded-md bg-aksen text-white font-medium text-[14px] mb-3'>Tambah Alamat</button>
                {onAddAddress?
                  <form onSubmit={handleAddAddress} className=' bg-slate-50 p-8 pt-10 rounded-lg border shadow-sm w-full max-w-[700px] grid grid-cols-2 gap-x-5 gap-y-1'>
                    <div className='w-full'>
                      <p className='text-[14px]'>Nama penerima</p>
                      <input onChange={handleChange} type="text" name='username' className='outline-none border px-4 py-2 rounded-lg mb-3 w-full' placeholder='Masukan nama penerima' />
                    </div>
                    <div className='w-full'>
                      <p className='text-[14px]'>Nomor HP</p>
                      <input onChange={handleChange} type="text" name='noHp' className='outline-none border px-4 py-2 rounded-lg mb-3 w-full' placeholder='Nomor HP' />
                    </div>
                    <div className='w-full col-span-2'>
                      <p className='text-[14px]'>Provinsi</p>
                      <input onChange={handleChange} type="text" name='province' className='outline-none border px-4 py-2 rounded-lg mb-3 w-full' placeholder='Masukan Provinsi Anda' />
                    </div>
                    <div className='w-full'>
                      <p className='text-[14px]'>Kabupaten / Kota</p>
                      <input onChange={handleChange} type="text" name='city' className='outline-none border px-4 py-2 rounded-lg mb-3 w-full' placeholder='Masukan Kabupaten atau Kota' />
                    </div>
                    <div className='w-full'>
                      <p className='text-[14px]'>Kecamatan</p>
                      <input onChange={handleChange} type="text" name='subdistrict' className='outline-none border px-4 py-2 rounded-lg mb-3 w-full' placeholder='Masukan Kecamatan Anda' />
                    </div>
                    <div className='w-full col-span-2 mb-5'>
                      <p className='text-[14px]'>Alamat Lengkap</p>
                      <input onChange={handleChange} type="text" name='fullAddress' className='outline-none border px-4 py-2 rounded-lg mb-3 w-full' placeholder='Alamat Lengkap' />
                    </div>
                    <div onClick={()=>setOnAddAddress(false)} className='cursor-pointer text-center py-2 rounded-lg bg-slate-200 text-slate-600 font-medium'>Batal</div>
                    <button type='submit' className='py-2 rounded-lg bg-aksen text-white font-medium'>Simpan</button>
                  </form>
                :
                  <div className="address-box">
                    {addresses.map((item, index) => (
                      <div key={index} className="item border border-blue-500 bg-blue-50 rounded-md p-3 mb-3">
                        <h5 className='font-medium'>Rumah</h5>
                        <h3 className='font-medium text-[18px]'>{item.username}</h3>
                        <p className='text-[15px]'>{item.noHp}</p>
                        <p className='text-[14px] mb-5'>{item.fullAddress}, {item.subdistrict}, {item.city}, {item.province}</p>
                        {/* <button className='text-aksen text-[14px]'>Ubah Alamat</button> */}
                      </div>
                    ))}
                  </div>
                }
              </div>
            </>
          }
          {isMenuProfile === 3 && 
            <>
              <div className="border shadow-sm rounded-lg p-2 sm:p-5 grid grid-cols-4 bg-white">
                <div className="before-pay flex flex-col justify-center items-center gap-1 p-2 rounded-md">
                  <div onClick={()=>setIsMenuOrder(1)} className={`${isMenuOrder === 1? 'bg-blue-100 border-blue-400 text-blue-500':'bg-white text-slate-600'}  py-4 cursor-pointer w-[70px] sm:w-[90px] border rounded-md flex items-center flex-col justify-center`}>
                    <FaWallet size={25}/>
                    <p className='text-[10px] sm:text-normal'>Belum Bayar</p>
                  </div>
                </div>
                <div className="before-pay flex flex-col justify-center items-center gap-1">
                  <div onClick={()=>setIsMenuOrder(2)} className={`${isMenuOrder === 2? 'bg-blue-100 border-blue-400 text-blue-500':'bg-white text-slate-600'} relative py-4 cursor-pointer w-[70px] sm:w-[90px] border rounded-md flex items-center flex-col justify-center`}>
                    <FaBox size={25}/>
                    <p className='text-[10px] sm:text-normal'>Dikemas</p>

                    {getListProduct.length !== 0 &&
                      <div className="notification w-5 h-5 rounded-full bg-red-500 absolute top-[-5px] right-[-5px] font-medium text-white text-[10px] flex items-center justify-center">
                        {getListProduct.length}
                      </div>
                    }
                  </div>
                </div>
                <div className="before-pay flex flex-col justify-center items-center gap-1">
                  <div onClick={()=>setIsMenuOrder(3)} className={`${isMenuOrder === 3? 'bg-blue-100 border-blue-400 text-blue-500':'bg-white text-slate-600'}  py-4 cursor-pointer w-[70px] sm:w-[90px] border rounded-md flex items-center flex-col justify-center`}>
                    <FaTruck size={25}/>
                    <p className='text-[10px] sm:text-normal'>Dikirim</p>
                  </div>
                </div>
                <div className="before-pay flex flex-col justify-center items-center gap-1">
                  <div onClick={()=>setIsMenuOrder(4)} className={`${isMenuOrder === 4? 'bg-blue-100 border-blue-400 text-blue-500':'bg-white text-slate-600'}  py-4 cursor-pointer w-[70px] sm:w-[90px] border rounded-md flex items-center flex-col justify-center`}>
                    <FaStar size={25}/>
                    <p className='text-[10px] sm:text-normal'>Beri Penilaian</p>
                  </div>
                </div>
              </div>
              <div className="main-menu-order">
                {isMenuOrder === 1 && 
                  <div className="pay border rounded-md py-9 flex justify-center items-center flex-col mt-4 bg-white">
                    <img src={walletVector} className='w-[300px]' />
                    <h6 className='font-medium text-slate-800'>Belum ada tagihan</h6>
                  </div>
                }
                {isMenuOrder === 2 && 
                <>
                  {getListProduct.length !== 0? 
                    <div className="list-product p-3 rounded-md border shadow-sm mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600 bg-white">
                      {getListProduct.map((item, index) => (
                        <div key={index} className="product-item border bg-slate-50 rounded-md p-3 w-full mb-3 flex items-center justify-between gap-x-5">
                          <div className='flex items-center gap-x-3'>
                            <div className="product-image col-span-2 w-[70px] h-[70px] rounded overflow-hidden mb-3 md:mb-0"><img src={item.productImage} className='w-full h-full object-cover' /></div>
                            <div>
                              <div className="product-desc col-span-6 font-medium">{item.productName}</div>
                              <div className="product-price col-span-2 font-medium">
                                <h6>{item.qty} x {item.priceAfterDiscount.toLocaleString('id-ID', {
                                  style: 'currency',
                                  currency: 'IDR',
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0
                                })}</h6>
                              </div>
                            </div>
                          </div>
                          <div className="product-price col-span-2 font-medium text-lg">
                            <h6>{(item.qty * item.priceAfterDiscount).toLocaleString('id-ID', {
                              style: 'currency',
                              currency: 'IDR',
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0
                            })}</h6>
                          </div>
                        </div>
                      ))}
                    </div>
                    :
                    <div className="pay border rounded-md py-9 flex justify-center items-center flex-col mt-4 bg-white">
                      <img src={boxOpenVector} className='w-[300px]' />
                      <h6 className='font-medium text-slate-800'>Belum ada barang yang dibeli</h6>
                    </div>
                  }

                </>
                }
                {isMenuOrder === 3 && 
                  <div className="pay border rounded-md py-9 flex justify-center items-center flex-col mt-4 bg-white">
                    <img src={trukVector} className='w-[300px]' />
                    <h6 className='font-medium text-slate-800'>Belum ada pengiriman</h6>
                  </div>
                }
                {isMenuOrder === 4 && 
                  <div className="pay border rounded-md py-9 flex justify-center items-center flex-col mt-4 bg-white">
                    <img src={starVector} className='w-[400px]' />
                    <h6 className='font-medium text-slate-800 mt-[30px]'>Belum memberi penilaian</h6>
                  </div>
                }
              </div>
            </>
          }
          {isMenuProfile === 4 && 
            <>
            <div className="border shadow-sm rounded-lg p-5 flex items-center flex-col bg-white">
              <img src={vectorStore} className='w-[400px]' />
              <h6 className='font-medium text-slate-700'>Belum Ada Toko Favorit</h6>
            </div>
          </>
          }
          {isMenuProfile === 5 && 
            <div className="secure">
              <div className="grid grid-1 md:grid-cols-2 text-slate-700 gap-5">
                <div className="change-password p-8 border rounded-lg shadow-sm bg-white">
                  <div className="header">
                    <div className="icon flex items-center justify-center w-8 h-8 rounded-full bg-blue-200"><FaLock className='text-slate-500'/></div>
                    <h4 className='font-medium text-[20px] my-4'>Ubah Kata Sandi</h4>
                    <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cumque ut deserunt a aperiam vitae, rerum nulla eos maiores ex.</p>
                  </div>
                  <div className="box-form my-8">
                    <div className="border px-4 py-3 flex items-center justify-between gap-x-2 rounded-md mb-3">
                      <FaLock className='text-slate-500' />
                      <input type="text" placeholder='Kata Sandi Saat Ini' className="text-[14px] outline-none w-full font-medium"/>
                    </div>
                    <div className="border px-4 py-3 flex items-center justify-between gap-x-2 rounded-md mb-3">
                      <FaLock className='text-slate-500' />
                      <input type="text" placeholder='Kata Sandi Baru' className="text-[14px] outline-none w-full font-medium"/>
                    </div>
                    <div className="border px-4 py-3 flex items-center justify-between gap-x-2 rounded-md mb-3">
                      <FaLock className='text-slate-500' />
                      <input type="text" placeholder='Konfirmasi Kata Sandi' className="text-[14px] outline-none w-full font-medium"/>
                    </div>
                  </div>
                  <button className='font-medium px-4 py-2 bg-aksen text-white rounded-md w-full'>Ubah Kata Sandi</button>
                </div>
                <div className="device-login p-8 border rounded-lg shadow-sm bg-white">
                  <div className="header border-b pb-8">
                    <div className="icon flex items-center justify-center w-8 h-8 rounded-full bg-blue-200"><FaLaptop className='text-slate-500'/></div>
                    <h4 className='font-medium text-[20px] my-4'>Aktivitas Login</h4>
                    <p className='text-[14px]'>Rem cumque ut deserunt a aperiam vitae, rerum nulla eos maiores ex.</p>
                    <button className='px-3 py-2 text-[14px] rounded-md  font-medium bg-blue-100 text-aksen mt-3'>Logout Semua Perangkat</button>
                  </div>
                  <div className="box-form my-8">
                    <div className="border gap-x-3 px-4 py-3 flex items-center justify-between rounded-md my-3">
                      <FaLaptop className='flex-none text-slate-500'/>
                      <div className="desc text-[12px] leading-none flex-grow">
                        <p className='font-medium text-[15px]'>Lenovo</p>
                        <p className='text-aksen'>Sedang Aktif</p>
                      </div>
                      <FaRightFromBracket size={17} className='flex-none text-red-500 cursor-pointer'/>
                    </div>
                    <hr />
                    <div className="border gap-x-3 px-4 py-3 flex items-center justify-between rounded-md my-3">
                      <FaLaptop className='flex-none text-slate-500'/>
                      <div className="desc text-[12px] leading-none flex-grow">
                        <p className='font-medium text-[15px]'>Asus</p>
                        <p>Aktif 2 Dec 2023, 10.05</p>
                      </div>
                      <FaRightFromBracket size={17} className='flex-none text-red-500 cursor-pointer'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </main>
      </div>
    </>
  )
}

export default Profile