import React from 'react'
import { Link } from 'react-router-dom'
import { agroEdu1, agroEdu2, agroEdu3, agroEdu4, agroEdu5, agroEdu6, agroEdu7, agroEdu8, agroseaAcademy, marinaEdu1, marinaEdu2, marinaEdu3, marinaEdu4, marinaEdu5, marinaEdu6, marinaEdu7, marinaEdu8, trending1, trending2, trending3 } from '../assets'
import { FaSearch } from 'react-icons/fa'
import CardEducation from '../components/organisms/CardEducation'
import Footer from '../components/template/Footer'
import EducationPart from '../components/template/EducationPart'
import { Helmet } from 'react-helmet'

const Education = () => {
  return (
    <>
      <Helmet>
        <title>Agrosea | Academy</title>
      </Helmet>

      {/* navbar */}
      <div className='w-[100%] bg-aksen fixed top-0 z-20'>
        <div className="max-w-[1280px] flex justify-between items-center mx-auto py-4 px-5 gap-5">
          <div className="logo hidden md:block">
            <Link to={'/education'}>
              <img src={agroseaAcademy} className='w-[275px]' />
            </Link>
          </div>
          <div className="box-search flex items-center justify-around bg-white rounded-full p-2 px-5">
            <input type="text" className='bg-transparent w-[90%] sm:w-[300px] border-none outline-none font-medium' placeholder={'Cari tutorial'}/>
            <FaSearch className='text-slate-600'/>
          </div>
        </div>
      </div>

      {/* main */}
      <main className='max-w-[1280px] mx-auto mb-[200px] px-5 xl:px-0'>
        {/* trending */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="w-full h-[550px] relative overflow-hidden">
            <img src={trending1} className='w-full h-full object-cover' />
            <h6 className='font-medium text-2xl text-white absolute bottom-[-10px] py-[30px] px-2 bg-gradient-to-t from-gray-950 to-transparent w-full'>Panduan Lengkap Menanam Padi dengan Hasil Melimpah dan Berkualitas</h6>
          </div>
          <div className="w-full h-[550px] grid grid-rows-2 gap-2">
            <div className="w-full h-full relative overflow-hidden">
              <img src={trending2} className='w-full h-full object-cover' />
              <h6 className='font-medium text-2xl text-white absolute bottom-[-20px] py-[30px] px-2 bg-gradient-to-t from-gray-950 to-transparent w-full'>Teknik Modern Menangkap Tuna: <br /> Pelajari dari Ahli Perikanan</h6>
            </div>
            <div className="w-full h-full relative overflow-hidden">
              <img src={trending3} className='w-full h-full object-cover' />
              <h6 className='font-medium text-2xl text-white absolute bottom-[-20px] py-[30px] px-2 bg-gradient-to-t from-gray-950 to-transparent w-full'>Rahasia Menanam Jagung: <br /> Teknik untuk Hasil Maksimal dan Berkualitas</h6>
            </div>
          </div>
        </div>

        {/* education agro */}
        <EducationPart title={'Agro'}>
            <CardEducation img={agroEdu1} title={'Cara Cek Gabah Berkualitas'} />
            <CardEducation img={agroEdu2} title={'Tips efektif menanam padi'} />
            <CardEducation img={agroEdu3} title={'Cara Menanam Jagung'} />
            <CardEducation img={agroEdu4} title={'Tips Panen Jagung'} />
            <CardEducation img={agroEdu5} title={'Tips Memanen Bawang Merah'} />
            <CardEducation img={agroEdu6} title={'Cara Menanam Bawang Merah'} />
            <CardEducation img={agroEdu7} title={'Cara Menanama Cabai'} />
            <CardEducation img={agroEdu8} title={'Produk Olahan Dari Singkong'} />
        </EducationPart>

        {/* education marina */}
        <EducationPart title={'Marina'}>
            <CardEducation img={marinaEdu1} title={'Cara Budidaya Ikan Mas'} />
            <CardEducation img={marinaEdu2} title={'Cara Budidaya Ikan Lele'} />
            <CardEducation img={marinaEdu3} title={'Cara Budidaya Rumput Laut'} />
            <CardEducation img={marinaEdu4} title={'Cara Budidaya Rumput Laut'} />
            <CardEducation img={marinaEdu5} title={'Cara Membuat Garam'} />
            <CardEducation img={marinaEdu6} title={'Cara Budidaya Lobster'} />
            <CardEducation img={marinaEdu7} title={'Cara Menjaring Ikan'} />
            <CardEducation img={marinaEdu8} title={'Cara Membuat Perahu'} />
        </EducationPart>
      </main>
      


      {/* footer */}
      <Footer />
    </>
  )
}

export default Education