import React, { useState } from 'react'
import Footer from '../components/template/Footer'
import { logoText } from '../assets'
import InputBox from '../components/Atoms/InputBox'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { updateUser } from '../api/api'

const RegisterStore = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const getIdUser = location.state || null
  const [isLoading, setIsLoading] = useState(false)

  const [dataUser, setDataUser] = useState({storeName:'', email:'', telp:'', pos:''})

  const handleInclude = (name, value) => {
    setDataUser(prevData => ({
      ...prevData, [name]:value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(dataUser.storeName == '' || dataUser.email == '' || dataUser.telp == '' || dataUser.pos == ''){
      Swal.fire({
        title: "Data tidak boleh ada yang kosong",
        text: "",
        icon: "warning"
      });
    } else {
      const seller = true;
      await updateUser({id:getIdUser, seller, storeName:dataUser.storeName})
      Swal.fire({
        title: "Selamat anda berhasil mendaftar",
        text: "",
        icon: "success"
      });
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        navigate('/store')
      }, 3000);
    }
  }

  return (
    <div className='mt-[-53px] pt-[28px] bg-bg'>
      <div className='max-w-[1280px] min-h-[90vh] mx-auto p-5 bg-white'>
        <h6 className='font-medium text-2xl pt-1'>Daftar Sebagai Seller</h6>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 bg-aksen p-5 py-10 rounded-lg mb-[200px]">
          <div className="box-image flex items-center justify-center"><img src={logoText} className='w-[60%]' /></div>
          <form onSubmit={handleSubmit} className="box-form border rounded-lg shadow-sm p-7 bg-white">
            <InputBox include={handleInclude} name={'storeName'} title={'Nama Toko'} placeholder={'Masukan nama toko anda'} style={'font-medium mb-3'}/>
            <InputBox include={handleInclude} name={'email'} title={'Email Aktif'} placeholder={'Masukan email anda'} style={'font-medium mb-3'}/>
            <InputBox include={handleInclude} name={'telp'} title={'Telepon'} placeholder={'Masukan nomor telepon anda'} style={'font-medium mb-3'}/>
            <div className='mb-3'>
              <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provinsi</label>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected >Pilih provinsi</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kota</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected >Pilih kota</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div>
                <InputBox include={handleInclude} name={'pos'} title={'Kode Pos'} placeholder={'Masukan kode pos'} style={'font-medium mb-3'}/>
              </div>
            </div>
            <InputBox include={handleInclude} name={'address'} title={'Alamat toko offline anda'} placeholder={'Masukan alamat toko offline anda (jika ada)'} style={'font-medium mb-5'}/>
            <button type='submit' className='bg-aksen text-white py-2 rounded-lg w-full font-medium'>Daftar</button>
          </form>
        </div>
      <Footer />
      </div>

      {isLoading && 
        <div className="loading absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-slate-600 bg-opacity-15">
          <div className="box px-[30px] py-[25px] bg-white rounded-md">
            <svg className="h-7 w-7 animate-spin stroke-slate-500" viewBox="0 0 256 256">
              <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="24"></line>
              <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="24"></line>
              <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="24"></line>
              <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
            </svg>
          </div>
        </div>
      }
    </div>
  )
}

export default RegisterStore