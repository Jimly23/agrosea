import React, { useState } from 'react'
import InputBox from '../components/Atoms/InputBox'
import Auth from '../components/template/Auth'

const Login = () => {
  const [checkUser, setCheckUser] = useState({})
  const handleInclude = (name, value) => {
    setCheckUser(prevCheckUser => ({
      ...prevCheckUser, [name]:value
    }))
  }
  return (
    <Auth txtButton={'Login'} title={'Selamat Datang Kembali'} link={'/register'} redirectPage={'Daftar'} dataUser={checkUser}>
      <InputBox include={handleInclude} name={'email'} title={'Email'} placeholder={'Masukan email anda'} style={'font-medium mb-3'}/>
      <InputBox include={handleInclude} name={'password'} type={'password'} title={'Password'} placeholder={'Masukan password anda'} style={'font-medium'}/>
    </Auth>
  )
}

export default Login