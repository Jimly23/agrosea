import React, { useEffect, useState } from 'react'
import { loginLogo, logoTextFooter } from '../../assets'
import { Link, useNavigate } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa';
import axios from 'axios';
import { login, register } from '../../api/api';
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import { setAuth } from '../../reducers/authReducers';

const Auth = ({children, title, txtButton, link, redirectPage, dataUser}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isTerms, setIsTerms] = useState(true);
  const [isKebijakan, setIsKebijakan] = useState(true);
  const [messageError, setMessageError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(txtButton == 'Login'){
      dataLoginUser(dataUser)
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000);
    }
    if(txtButton == 'Daftar'){
      addDataUser(dataUser)
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000);
    }
  }

  const handleError = (message) => {
    setMessageError(message)
    setTimeout(() => {
      setMessageError('')
    }, 5000);
  }

  const addDataUser = async(data) => {
    try {
      if(data.username !== '' && data.email !== '' && data.password !== '' && data.confPassword !== ''){
        if(data.password === data.confirmPassword){
          await register(data)
          handleSuccessRegister()
          setTimeout(() => {
            navigate('/')
          }, 2000);
        } else {
          handleError('Password & confirm password harus sama!')
        }
      } else {
        handleError('Data tidak boleh kosong!')
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  const dataLoginUser = async(data) => {
    try {
      const response = await login(data)
      if(typeof(response) == 'object'){
        dispatch(setAuth(true))
        navigate('/home')
      } else {
        handleError(response)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const  handleSuccessRegister = () => {
    Swal.fire({
      title: "Selamat anda berhasil mendaftar",
      text: "",
      icon: "success"
    });
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 absolute left-0 right-0 top-0 bottom-0 overflow-x-hidden'>
      <div className="bg-aksen hidden lg:flex items-center justify-center "><img src={loginLogo} className='w-full'/></div>
      <div className="bg-white flex justify-center items-center">
        <Link to={link}><button className='px-5 py-2 rounded-md border border-aksen font-medium text-aksen hover:bg-blue-100 absolute right-5 top-5'>{redirectPage}</button></Link>
        <div className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
          <div className="header text-slate-700 mb-8">
            <img src={logoTextFooter} className='w-[150px] mb-10' />
            <h3 className='font-bold text-3xl mb-1'>{title}</h3>
            <p className='text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sunt?</p>
          </div>
          {messageError !== '' && <h6 className='text-red-500'>{messageError}</h6>}
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              {children}
              <button type='submit' className='w-full bg-aksen rounded-md py-2 font-medium text-white mt-8'>{txtButton}</button>
            </form>
            {txtButton == 'Login'? 
              // <p className='text-[14px] py-1 mt-1'>Lupa password? <span className=' text-aksen underline'>klik disini</span></p>
              <></>
              :
              <div className='mt-4'>
                <div className="flex items-center gap-2 mb-1">
                  <div onClick={()=>setIsTerms(prev => !prev)} className='w-4 h-4 cursor-pointer border-[1px] border-slate-400 rounded flex items-center justify-center'>{isTerms && <FaCheck size={12}/>}</div>
                  <p className='text-[12px]'>I accept <span className='font-medium underline cursor-pointer'>Terms Service and Privacy Policy</span></p>
                </div>
                <div className="flex gap-2">
                  <div onClick={()=>setIsKebijakan(prev => !prev)} className='w-4 h-4 cursor-pointer border-[1px] border-slate-400 rounded flex items-center justify-center'>{isKebijakan && <FaCheck size={12}/>}</div>
                  <p className='text-[12px] w-[90%]'>Dengan melanjutkan pendaftaran, saya mengakui bahwa saya telah membaca dan menyetujui Syarat & Ketentuan Penggunaan dan Kebijakan Privasi Agrosea, yang mengatur bagaimana Agrosea mengumpulkan, menggunakan dan mengungkapkan data pribadi saya, dan hak-hak yang saya miliki berdasarkan hukum.</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      {isLoading && 
        <div className="loading absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-slate-600 bg-opacity-15">
          <div className="box px-[30px] py-[25px] bg-white rounded-md">
            <svg class="h-7 w-7 animate-spin stroke-slate-500" viewBox="0 0 256 256">
              <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
              <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="24"></line>
              <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="24"></line>
              <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="24"></line>
              <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
              <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
            </svg>
          </div>
        </div>
      }
    </div>
  )
}

export default Auth