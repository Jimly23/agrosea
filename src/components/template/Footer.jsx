import React from 'react'
import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaRegCopyright, FaTiktok, FaTwitter } from 'react-icons/fa'
import { akulakuLogo, alfamartLogo, bcaLogo, bniLogo, briLogo, danaLogo, gopayLogo, indomaretLogo, kredivoLogo, linkajaLogo, logoText, logoTextFooter, mandiriLogo, ovoLogo } from '../../assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="border-t">
      <div className='max-w-[1280px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-[50px] gap-5 p-2'>
        <div className="lg:col-span-2">
          <h5 className='box-img'>
            <img src={logoTextFooter} className='w-[200px]' />
          </h5>
          <div className="copyright text-slate-600 mt-5">
            <p className='flex items-center text-[14px]'><FaRegCopyright size={13}/> <span>2024, PT. Agrosea</span></p>
            <p className='text-[13px]'>Terms Of Service | Privacy Policy</p>
          </div>
        </div>
        <div className="box">
          <h5 className='font-medium mb-3'>Agrosea</h5>
          <ul className='text-[14px] text-slate-600'>
            <li className='mb-2'>Tentang Agrosea</li>
            <li className='mb-2'>Kebijakan Privasi</li>
            <li className='mb-2'>Karir di Agrosea</li>
            <li className='mb-2'>Aturan Penggunaan</li>
            <li className='mb-2'>Promo Hari Ini</li>
            <li className='mb-2'>Agrosea Academy</li>
            <li className='mb-2'>FAQ (Tanya Jawab)</li>
          </ul>
        </div>
        <div className="box">
          <h5 className='font-medium mb-3'>Layanan Pelanggan</h5>
          <ul className='text-[14px] text-slate-600'>
            <li className='mb-2'>Bantuan</li>
            <li className='mb-2'>Metode Pembayaran</li>
            <li className='mb-2'>Gratis Ongkir</li>
            <li className='mb-2'>Pengembalian Barang</li>
            <li className='mb-2'>Garansi Agrosea</li>
            <li className='mb-2'>Hubungi Kami</li>
          </ul>
        </div>
        <div className="box">
          <h5 className='font-medium mb-3'>Pembayaran</h5>
          <div className="grid grid-cols-2 gap-y-2">
            <img src={briLogo} className='w-[70px]' />
            <img src={bcaLogo} className='w-[70px]' />
            <img src={bniLogo} className='w-[70px]' />
            <img src={mandiriLogo} className='w-[70px]' />
            <img src={danaLogo} className='w-[70px]' />
            <img src={gopayLogo} className='w-[70px]' />
            <img src={ovoLogo} className='w-[70px]' />
            <img src={kredivoLogo} className='w-[70px]' />
            <img src={akulakuLogo} className='w-[70px]' />
            <img src={linkajaLogo} className='w-[70px]' />
            <img src={alfamartLogo} className='w-[70px]' />
            <img src={indomaretLogo} className='w-[70px]' />
          </div>
        </div>
        <div className="box">
          <h5 className='font-medium mb-3'>Ikuti Kami</h5>
          <ul className='text-[14px] text-slate-600'>
            {/* <li className='mb-2 flex items-center gap-x-2'><FaFacebook  size={18}/> <Link to={'https://www.instagram.com/jmyassdqi/'}>Facebook</Link></li> */}
            <li className='mb-2 flex items-center gap-x-2'><FaInstagram  size={18}/> <a href="https://www.instagram.com/jmyassdqi/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li className='mb-2 flex items-center gap-x-2'><FaTiktok  size={18}/> <a href="https://www.tiktok.com/@jimlyassidqi" target="_blank" rel="noopener noreferrer">Tiktok</a></li>
            <li className='mb-2 flex items-center gap-x-2'><FaLinkedin  size={18}/> <a href="https://www.linkedin.com/in/jimly-assidqi-hardiansyah-b01b4a283/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
            <li className='mb-2 flex items-center gap-x-2'><FaTwitter  size={18}/> <a href="https://twitter.com/jmlyassdqi67452" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer