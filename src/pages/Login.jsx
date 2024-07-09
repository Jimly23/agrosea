import React, { useState } from 'react'
import { loginLogo, logoTextFooter } from '../assets'
import InputBox from '../components/Atoms/InputBox'
import { Link } from 'react-router-dom'
import Auth from '../components/template/Auth'

const Login = () => {
  return (
    <Auth txtButton={'Login'} title={'Selamat Datang Kembali'} link={'/register'} redirectPage={'Daftar'}>
      <InputBox title={'Email'} placeholder={'Masukan email anda'} style={'font-medium mb-3'}/>
      <InputBox type={'password'} title={'Password'} placeholder={'Masukan password anda'} style={'font-medium'}/>
    </Auth>
  )
}

export default Login