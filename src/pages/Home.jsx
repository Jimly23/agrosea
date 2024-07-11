import React, { useEffect, useState } from 'react'
import CarouselBanner from '../components/organisms/CarouselBanner'
import CategoryBox from '../components/organisms/CategoryBox'
import Products from '../components/template/Products'
import Footer from '../components/template/Footer'

const Home = () => {
  const [isCategory, setIsCategory] = useState(1)
  const handleIsCategory = (data) => {
    setIsCategory(data)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='max-w-[1280px] mx-auto'>
        <CarouselBanner />
        <main className='px-2 mb-[100px]'>
          <CategoryBox onCategory={handleIsCategory}/>
          <Products isCategory={isCategory}/>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Home