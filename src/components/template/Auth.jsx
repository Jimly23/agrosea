import React, { useState } from 'react'
import { loginLogo, logoTextFooter } from '../../assets'
import { Link, useNavigate } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa';

const Auth = ({children, title, txtButton, link, redirectPage}) => {
  const navigate = useNavigate();
  const [isTerms, setIsTerms] = useState(false);
  const [isKebijakan, setIsKebijakan] = useState(false);

  const handleClickLogin = () => {
    if(txtButton == 'Login'){
      navigate('/home')
    }
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 absolute left-0 right-0 top-0 bottom-0 overflow-x-hidden'>
      <div className="bg-aksen hidden lg:flex items-center justify-center "><img src={loginLogo} className='w-[60%]'/></div>
      <div className="bg-white flex justify-center items-center">
        <Link to={link}><button className='px-5 py-2 rounded-md border border-aksen font-medium text-aksen hover:bg-blue-100 absolute right-5 top-5'>{redirectPage}</button></Link>
        <div className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
          <div className="header text-slate-700 mb-8">
            <img src={logoTextFooter} className='w-[150px] mb-10' />
            <h3 className='font-bold text-3xl mb-1'>{title}</h3>
            <p className='text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sunt?</p>
          </div>
          <div className="form-box">
            {children}
            <button onClick={handleClickLogin} className='w-full bg-aksen rounded-md py-2 font-medium text-white mt-8'>{txtButton}</button>
            {txtButton == 'Login'? 
              <p className='text-[14px] py-1 mt-1'>Lupa password? <span className=' text-aksen underline'>klik disini</span></p>
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
    </div>
  )
}

export default Auth