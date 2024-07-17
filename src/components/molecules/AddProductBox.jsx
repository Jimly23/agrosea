import React, { useState } from 'react'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import InputBox from '../Atoms/InputBox'
import TextBox from '../Atoms/TextBox'
import { vectorImg } from '../../assets'
import CategoryProduct from '../organisms/CategoryProduct'
import { addProduct } from '../../api/api'

const AddProductBox = ({onIsMenu, updateProduct}) => {
  const [newProduct, setNewProduct] = useState({
    price:updateProduct?updateProduct.price:'',
    productName:updateProduct?updateProduct.productName:'',
    discount:updateProduct?updateProduct.discount:'',
    stock:updateProduct?updateProduct.stock:'',
    desc:updateProduct?updateProduct.desc:''
  })
  const [category, setCategory] = useState({category: '', specCategory: ''})
  const [isLoading, setIsLoading] = useState(false)

  console.log(updateProduct);

  const handleInclude = (name, value) => {
    setNewProduct(prevCheckUser => ({
      ...prevCheckUser, [name]:value
    }))
  }

  const handleSelectCategory = (data) => {
    setCategory(data)
  }

  const sweetAlert = (data, icon) => {
    Swal.fire({
      title: data,
      text: "",
      icon: icon
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userId = Cookies.get('userID');
    const product = {userId, ...newProduct, ...category}
    if(product.category === '' || product.specCategory === ''){
      sweetAlert("Pilih kategori & Spesifik kategori terlebih dahulu", "warning")
    } else {
      if (product.productName === '' || product.price === '' || product.stock === '' || product.desc === ''){
        sweetAlert("Data belum lengkap", "warning")
      } else {
        await addProduct(product)
        sweetAlert("Produk berhasil ditambahkan", "success")
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
          onIsMenu(4)
        }, 3000);
      }
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const preview = URL.createObjectURL(file);
    console.log(preview);
  }


  return (
    <div className='grid grid-cols-1 lg:grid-cols-10 gap-5'>
      <div className="img-product lg:col-span-3 font-medium">
        <div className="border rounded-lg shadow-sm pb-4 bg-white overflow-hidden">
          <div className="header py-3 px-5 border-b"><h5>Foto Produk</h5></div>
          <div className="image-box p-3">
            <div className="img w-full rounded-md h-[300px] lg:h-[180px] xl:h-[300px] flex items-center justify-center border">
              <img src={vectorImg} className='w-[50%]' />
            </div>
          </div>
          <input type="file" onChange={handleFileChange} className='p-1 rounded-md ms-3 text-[14px]'/>
        </div>
      </div>
      <div className="desc-product lg:col-span-7 font-medium">
        {/* product categories */}
        <div className="product-categories shadow-sm rounded-lg border bg-white mb-4">
          <div className="header p-3 border-b"><h5>Pilih Kategori Produk</h5></div>
          <CategoryProduct onCategory={handleSelectCategory}/>
        </div>

        {/* product-details */}
        <div className="product-details shadow-sm rounded-lg border bg-white">
          <div className="header p-3 border-b"><h5>Detail Produk</h5></div>
          <form onSubmit={handleSubmit} className='p-5'>
            <div className="product-name mb-3"><InputBox name={'productName'} updateValue={updateProduct&& newProduct.productName} include={handleInclude} title={'Nama Produk'} placeholder={'Masukan nama produk'}/></div>
            <div className="product-price grid md:grid-cols-3 gap-3 mb-3">
              <InputBox updateValue={updateProduct&& newProduct.price} name={'price'} include={handleInclude} title={'Harga'} placeholder={'Masukan harga produk'}/>
              <InputBox updateValue={updateProduct&& newProduct.discount} name={'discount'} include={handleInclude} title={'Diskon'} optional={'Optional'} placeholder={'Masukan diskon'}/>
              <InputBox updateValue={updateProduct&& newProduct.stock} name={'stock'} include={handleInclude} title={'Atur Stok'} placeholder={'Atur stok barang'}/>
            </div>
            <TextBox name={'desc'} include={handleInclude} />
            <button type='submit' className='font-medium text-white bg-aksen rounded-md py-1 px-3 mt-5'>Tambah</button>
          </form>
        </div>
      </div>

      {/* loading */}
      {isLoading && 
        <div className="loading z-50 absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-slate-600 bg-opacity-15">
          <div className="box px-[30px] py-[25px] bg-white rounded-md">
            <svg className="h-7 w-7 animate-spin stroke-slate-500" viewBox="0 0 256 256">
              <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="24"></line>
              <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="24"></line>
              <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="24"></line>
              <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
            </svg>
          </div>
        </div>
      }
    </div>
  )
}

export default AddProductBox