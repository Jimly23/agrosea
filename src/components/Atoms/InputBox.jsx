import React, { useState } from 'react'
import { FaEye, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const InputBox = ({name, title, optional, type, placeholder, style, include}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleChange = (e) => {
    include(name, e.target.value)
  }

  return (
    <div className={`${style? style:'text-[13px]'}  text-slate-700`}>
      <div className="header mb-1 flex items-center gap-x-1">
        <h6 className={``}>{title}</h6>
        <h6 className='text-[12px] text-slate-500'>{optional}</h6>
      </div>
      <div className='flex items-center border rounded-md p-1 pe-5'>
        <input onChange={handleChange} type={type? isShowPassword? 'text' : type : 'text'} placeholder={placeholder} className='text-[14px] px-4 py-2 outline-none font-normal w-full'/>
        {type == 'password' && 
          <>
            {isShowPassword? <FaRegEye onClick={()=>setIsShowPassword(prev => !prev)} size={20} className='cursor-pointer'/> : <FaRegEyeSlash onClick={()=>setIsShowPassword(prev => !prev)} size={20} className='cursor-pointer'/>}
          </> 
        }
      </div>
    </div>
  )
}

export default InputBox