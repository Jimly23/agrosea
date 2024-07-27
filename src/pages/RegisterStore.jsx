import React, { useEffect, useState } from 'react'
import Footer from '../components/template/Footer'
import { logoText } from '../assets'
import InputBox from '../components/Atoms/InputBox'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getProvince, getRegencies, updateUser } from '../api/api'
import dataWilayah from '../api/dataWilayah'
import Loading from '../components/molecules/Loading'

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

  useEffect(()=>{
    const getProvinsi = async()=>{
      const provinsi = await getProvince()
      setDistricts(provinsi)
    }
    getProvinsi()
  }, [])

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
            <div className="grid grid-cols-2 gap-2">
            <InputBox include={handleInclude} name={'province'} title={'Provinsi'} placeholder={'Masukan Provinsi anda'} style={'font-medium mb-5'}/>
            <InputBox include={handleInclude} name={'city'} title={'Kota'} placeholder={'Masukan Kota anda'} style={'font-medium mb-5'}/>
            </div>
            <InputBox include={handleInclude} name={'address'} title={'Alamat toko offline anda'} placeholder={'Masukan alamat toko offline anda (jika ada)'} style={'font-medium mb-5'}/>
            <button type='submit' className='bg-aksen text-white py-2 rounded-lg w-full font-medium'>Daftar</button>
          </form>
        </div>
      <Footer />
      </div>

      {isLoading && 
        <Loading />
      }
    </div>
  )
}

export default RegisterStore