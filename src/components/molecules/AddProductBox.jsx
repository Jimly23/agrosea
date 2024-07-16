import React from 'react'
import { FaUpload } from 'react-icons/fa'
import InputBox from '../Atoms/InputBox'
import TextBox from '../Atoms/TextBox'
import { vectorImg } from '../../assets'

const AddProductBox = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-10 gap-5'>
      <div className="img-product lg:col-span-3 font-medium">
        <div className="border rounded-lg shadow-sm pb-4 bg-white">
          <div className="header py-3 px-5 border-b"><h5>Foto Produk</h5></div>
          <div className="image-box p-3">
            <div className="img w-full rounded-md h-[300px] lg:h-[180px] xl:h-[300px] flex items-center justify-center border">
              <img src={vectorImg} className='w-[50%]' />
            </div>
          </div>
          <button className='px-3 py-2 border text-slate-600 rounded-md ms-3 text-[14px] flex items-center gap-x-2'><FaUpload /> <span>Unggah Foto</span></button>
        </div>
      </div>
      <div className="desc-product lg:col-span-7 shadow-sm rounded-lg border font-medium bg-white">
        <div className="header p-3 border-b"><h5>Informasi Produk</h5></div>
        <div className="form-product-information p-5">
          <div className="product-name mb-3"><InputBox title={'Nama Produk'} placeholder={'Masukan nama produk'}/></div>
          <div className="product-price grid md:grid-cols-3 gap-3 mb-3">
            <InputBox title={'Harga'} placeholder={'Masukan harga produk'}/>
            <InputBox title={'Diskon'} optional={'Optional'} placeholder={'Masukan diskon'}/>
            <InputBox title={'Atur Stok'} placeholder={'Atur stok barang'}/>
          </div>
          <TextBox />
          <button className='font-medium text-white bg-aksen rounded-md py-1 px-3 mt-5'>Tambah</button>
        </div>
      </div>
    </div>
  )
}

export default AddProductBox