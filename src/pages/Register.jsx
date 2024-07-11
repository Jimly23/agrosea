import React, { useEffect, useState } from 'react'
import InputBox from '../components/Atoms/InputBox'
import Auth from '../components/template/Auth'


const Register = () => {
  const [dataUser, setDataUser] = useState({username: '',email:'',password:'',confirmPassword:''})

  const handleInclude = (name, value) => {
    setDataUser(prevData => ({
      ...prevData, [name]:value
    }))
  }


  return (
    <Auth txtButton={'Daftar'} title={'Daftar'} link={'/'} redirectPage={'Login'} dataUser={dataUser}>
      <InputBox include={handleInclude} name={'username'} title={'Nama Lengkap'} placeholder={'Masukan nama lengkap anda'} style={'font-medium mb-3'}/>
      <InputBox include={handleInclude} name={'email'} title={'Email'} placeholder={'Masukan email anda'} style={'font-medium mb-3'}/>
      <InputBox include={handleInclude} name={'password'} type={'password'} title={'Password'} placeholder={'Masukan password anda'} style={'font-medium mb-3'}/>
      <InputBox include={handleInclude} name={'confirmPassword'} type={'password'} title={'Konfirmasi Password'} placeholder={'Konfirmasi password'} style={'font-medium'}/>
    </Auth>
  )
}

export default Register