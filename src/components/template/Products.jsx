import React, { useEffect, useState } from 'react'
import CardProduct from '../organisms/CardProduct'
import { getProducts, getProductsByCategory } from '../../api/api'

const Products = ({isCategory}) => {
  const [listProduct, setListProduct] = useState([]);

  const products = () => {
    const response = getProducts();
    setListProduct(response)
  }

  const productsByCategory = (category) => {
    const response = getProductsByCategory(category)
    setListProduct(response)
  }

  useEffect(()=>{
    if(isCategory === 1) products();
    if(isCategory === 2) productsByCategory('agro');
    if(isCategory === 3) productsByCategory('marina');
  }, [isCategory])

  return (
    <div className='mt-5'>
      <h4 className='md:text-xl font-medium'>Produk</h4>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-2 rounded-lg'>
        {isCategory === 1 && 
          <>
            {listProduct.map((item,index)=>(
              <div key={index}>
                <CardProduct productInformation={item}/>
              </div>
            ))}
          </>
        }
        {isCategory === 2 && 
          <>
            {listProduct.map((item,index)=>(
              <div key={index}>
                <CardProduct productInformation={item}/>
              </div>
            ))}
          </>
        }
        {isCategory === 3 && 
          <>
            {listProduct.map((item,index)=>(
              <div key={index}>
                <CardProduct productInformation={item}/>
              </div>
            ))}
          </>
        }
      </div>
    </div>
  )
}

export default Products