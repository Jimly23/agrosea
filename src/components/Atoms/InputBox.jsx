import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const InputBox = ({name, title, optional, type, placeholder, style, include, updateValue}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [inputText, setInputText] = useState(updateValue)

  const handleChange = (e) => {
    include(name, e.target.value)
    setInputText(e.target.value)
  }

  return (
    <div className={`${style? style:'text-[13px]'}  text-slate-700`}>
      <div className="header mb-1 flex items-center gap-x-1">
        <h6 className={`text-[14px]`}>{title}</h6>
        <h6 className='text-[12px] text-slate-500'>{optional}</h6>
      </div>
      <div className='flex items-center border rounded-md p-1 pe-5'>
        <input onChange={handleChange} value={inputText} type={type? isShowPassword? 'text' : type : 'text'} placeholder={placeholder} className={`text-[14px] px-4 py-2 outline-none font-normal w-full`}/>
        {type == 'password' && 
          <>
            {isShowPassword? <FaRegEye onClick={()=>setIsShowPassword(prev => !prev)} size={20} className='cursor-pointer'/> : <FaRegEyeSlash onClick={()=>setIsShowPassword(prev => !prev)} size={20} className='cursor-pointer'/>}
          </> 
        }
        {optional&&<h6>%</h6>}
      </div>
    </div>
  )
}

export default InputBox