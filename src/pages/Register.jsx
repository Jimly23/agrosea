import React from 'react'
import InputBox from '../components/Atoms/InputBox'
import Auth from '../components/template/Auth'

const Register = () => {
  return (
    <Auth txtButton={'Daftar'} title={'Daftar'} link={'/'} redirectPage={'Login'}>
      <InputBox title={'Nama Lengkap'} placeholder={'Masukan nama lengkap anda'} style={'font-medium mb-3'}/>
      <InputBox title={'Email'} placeholder={'Masukan email anda'} style={'font-medium mb-3'}/>
      <InputBox type={'password'} title={'Password'} placeholder={'Masukan password anda'} style={'font-medium mb-3'}/>
      <InputBox type={'password'} title={'Konfirmasi Password'} placeholder={'Konfirmasi password'} style={'font-medium'}/>
    </Auth>
  )
}

export default Register