import React, { useState, useEffect } from 'react'
import { FaBars, FaBoxOpen,  FaFileInvoice, FaHome, FaPlusCircle } from 'react-icons/fa'
import DetailTransaction from '../components/molecules/DetailTransaction'
import AddProductBox from '../components/molecules/AddProductBox'
import { myProfilePic } from '../assets'
import Cookies from 'js-cookie'
import ChartTransaction from '../components/template/ChartTransaction'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import CardBalance from '../components/organisms/CardBalance'
import TransactionStore from '../components/template/TransactionStore'
import { getUserById } from '../api/api'
import ProductsStore from '../components/template/ProductsStore'

const data = [
  {
    name: 'Jan',
    penjualan: 700,
    pengunjung: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    penjualan: 1200,
    pengunjung: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    penjualan: 1800,
    pengunjung: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    penjualan: 1600,
    pengunjung: 3908,
    amt: 2000,
  },
  {
    name: 'Mei',
    penjualan: 1800,
    pengunjung: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    penjualan: 1400,
    pengunjung: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    penjualan: 1700,
    pengunjung: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    penjualan: 2100,
    pengunjung: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    penjualan: 1500,
    pengunjung: 4300,
    amt: 2100,
  },
  {
    name: 'Okt',
    penjualan: 2400,
    pengunjung: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    penjualan: 3000,
    pengunjung: 4300,
    amt: 2100,
  },
  {
    name: 'Des',
    penjualan: 3400,
    pengunjung: 4300,
    amt: 2100,
  },
]

const dataPengunjung = [
  {
    name: 'Sen',
    pengunjung: 2400,
    amt: 2400,
  },
  {
    name: 'Sel',
    pengunjung: 3398,
    amt: 2210,
  },
  {
    name: 'Rab',
    pengunjung: 7800,
    amt: 2290,
  },
  {
    name: 'Kam',
    pengunjung: 3908,
    amt: 2000,
  },
  {
    name: 'Jum',
    pengunjung: 5800,
    amt: 2181,
  },
  {
    name: 'Sab',
    pengunjung: 8800,
    amt: 2500,
  },
  {
    name: 'Min',
    pengunjung: 9300,
    amt: 2100,
  },
]

const Store = () => {
  const [isMenu, setIsMenu] = useState(1);
  const [isMenuMobile, setIsMenuMobile] = useState(false);
  const [userLogin, setUserLogin] = useState({})
  const [products, setProducts] = useState([])

  useEffect(()=> {
    getUserData()
  }, [])

  const getUserData = async() => {
    const userID = Cookies.get('userID');
    if (userID) {
      const response = await getUserById(userID)
      setUserLogin(response)
    }
  };

  const handleClickMenuMobile = (selectMenu) => {
    setIsMenu(selectMenu)
    setIsMenuMobile(false)
  }

  const handleIsMenu = (data) => {
    setIsMenu(data)
  }



  return (
    <div className='w-full px-2 grid grid-cols-1 md:grid-cols-10 -my-7 gap-y-3 md:gap-5 md:-mx-2 bg-bg min-h-[92.5vh]'>
      <div className="flex absolute md:hidden pt-5 items-center gap-3">
        <div onClick={()=> setIsMenuMobile(true)} className="menu-bars flex items-center justify-center cursor-pointer w-[40px] h-[40px] border rounded-md">
          <FaBars />
        </div>
        {isMenu === 1 && <h6>Ringkasan Transaksi</h6>}
        {isMenu === 2 && <h6>Transaksi</h6>}
        {isMenu === 3 && <h6>Jual Barang</h6>}
        {isMenu === 4 && <h6>Barang</h6>}
        <div className={`${isMenuMobile?'block':'hidden'} absolute top-[70px] w-[200px] border rounded-md bg-white`}>
          <ul className='py-2 text-slate-700'>
            <li onClick={()=>handleClickMenuMobile(1)} className={`flex items-center gap-x-2 px-5 py-3 hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] ${isMenu === 1 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} cursor-pointer`}><FaHome size={23}/> <span className='text-[15px]'>Ringkasan</span></li>
            <li onClick={()=>handleClickMenuMobile(2)} className={`flex items-center gap-x-2 px-5 py-3 hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] ${isMenu === 2 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} cursor-pointer`}><FaFileInvoice size={20}/> <span className='text-[15px]'>Transaksi</span></li>
            <li onClick={()=>handleClickMenuMobile(3)} className={`flex items-center gap-x-2 px-5 py-3 hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] ${isMenu === 3 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} cursor-pointer`}><FaPlusCircle size={20}/> <span className='text-[15px]'>Jual Barang</span></li>
            <li onClick={()=>handleClickMenuMobile(4)} className={`flex items-center gap-x-2 px-5 py-3 hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] ${isMenu === 4 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} cursor-pointer`}><FaBoxOpen size={20}/> <span className='text-[15px]'>Barang</span></li>
          </ul>
        </div>
      </div>

      {/* sidebar */}
      <div className="hidden md:block fixed top-[75px] left-0 bottom-0 md:w-[28%] lg:w-[18.5%] bg-white">
        <div className="header flex items-center gap-x-3 font-medium border-b p-3">
          <div className="profil-pic w-10 h-10 rounded-full border shadow-sm overflow-hidden"><img src={myProfilePic} className='w-full h-full object-cover' /></div>
          <h4 className='text-lg'>{userLogin.storeName? userLogin.storeName : ''}</h4>
        </div>
        <div className="menu font-medium">
          <ul className='py-5 mt-3 text-slate-700'>
            <li onClick={()=>setIsMenu(1)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenu === 1 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] cursor-pointer`}><FaHome size={23}/> <span className='text-[15px]'>Dashboard</span></li>
            <li onClick={()=>setIsMenu(2)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenu === 2 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] cursor-pointer`}><FaFileInvoice size={20}/> <span className='text-[15px]'>Transaksi</span></li>
            <li onClick={()=>setIsMenu(3)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenu === 3 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] cursor-pointer`}><FaPlusCircle size={20}/> <span className='text-[15px]'>Jual Barang</span></li>
            <li onClick={()=>setIsMenu(4)} className={`flex items-center gap-x-2 px-5 py-3 ${isMenu === 4 && 'bg-blue-200 border-l-[5px] border-blue-500 text-blue-500'} hover:bg-blue-200 hover:border-blue-500 hover:border-l-[5px] cursor-pointer`}><FaBoxOpen size={20}/> <span className='text-[15px]'>Barang</span></li>
          </ul>
        </div>
      </div>

      <main className='md:col-start-4 lg:col-start-3 col-span-7 lg:col-span-8 w-full py-5 mt-14 md:mt-0'>
        {isMenu === 1 &&
          <div className="detail-transaksi grid lg:grid-cols-2 gap-5 mb-5">
            <DetailTransaction title={'Ringkasan Transaksi'} col1={'Pesanan Baru'} col2={'Di Proses'} col3={'Retur'}/>
            <CardBalance title={'Total Saldo'}/>

            <ChartTransaction title={'Statistik Penjualan Bulanan'}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                  <CartesianGrid strokeDasharray="4 4" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="penjualan" fill="#B5E1D0" />
                </BarChart>
              </ResponsiveContainer>
            </ChartTransaction>

            <ChartTransaction title={'Jumlah Pengunjung'}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={dataPengunjung}
                  margin={{
                    top: 15,
                    right: 30,
                    left: 5,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pengunjung" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartTransaction>
          </div>
        }
        {isMenu === 2 &&
          <div className="transaction gap-x-5 mb-5 overflow-x-scroll lg:overflow-hidden">
            <TransactionStore />
            {/* <div className='border shadow-sm rounded-lg bg-white'>
              <div className="header p-3 border-b font-medium"><h5>Transaksi</h5></div>
              <div className="main flex justify-center items-center py-10">
                <div className='text-center'>
                  <img src={transactionNull} className='w-[300px]' />
                  <p className=''>Belum Ada Transaksi</p>
                </div>
              </div>
            </div> */}
          </div>
        }
        {isMenu === 3 &&
            <AddProductBox onIsMenu={handleIsMenu}/>
        }
        {isMenu === 4 &&
            <ProductsStore />
        }
      </main>
    </div>
  )
}

export default Store