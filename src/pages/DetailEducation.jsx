import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { agroseaAcademy } from '../assets'
import { FaSearch } from 'react-icons/fa'
import Footer from '../components/template/Footer'
import { Helmet } from 'react-helmet'

const DetailEducation = () => {
  const location = useLocation()
  const data = location.state
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <main className='max-w-[1080px] mx-auto mb-[200px] px-5 xl:px-0'>
        {/* title */}
        <div className="title mb-8">
          <h5 className='font-bold text-slate-700 text-3xl'>{data.title}</h5>
          <p className='font-medium mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quia.</p>
        </div>
        
        {/* baner */}
        <div className="baner h-[400px] lg:h-[600px] rounded-md overflow-hidden mb-20">
          <img src={data.img} className='w-full h-full object-cover' />
        </div>

        {/* materi */}
        <div className="materi">
          <section className='text-slate-700 mb-10'>
            <h5 className='font-bold text-2xl mb-2'>Lorem ipsum dolor sit</h5>
            <p className='text-[18px] text-justify'><span className='ms-10'></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit animi cupiditate quae voluptatem, quisquam porro iusto eaque error omnis molestiae alias architecto veniam provident minus reiciendis rerum tenetur pariatur itaque est blanditiis consectetur. Animi ipsam earum quis voluptatum voluptates architecto vel obcaecati! Deleniti, rerum, necessitatibus consequuntur aliquam animi accusamus enim velit inventore et odio perspiciatis totam beatae assumenda aspernatur? Cupiditate commodi, voluptatibus non libero eaque dignissimos quaerat consequuntur, sed, itaque veritatis inventore laboriosam labore aut culpa ut. Magnam neque cumque maxime, mollitia quia omnis illum labore perferendis quaerat eum ipsum natus debitis in non accusantium, dolore exercitationem? Quidem, magni illum! Tempore animi deleniti dolores expedita facilis laborum perferendis, deserunt voluptatibus earum iste unde voluptates cumque? Ipsa tempora dolore assumenda.</p>
          </section>

          <section className='text-slate-700 mb-10'>
            <h5 className='font-bold text-2xl mb-2'>Lorem ipsum dolor sit</h5>
            <p className='text-[18px] text-justify'><span className='ms-10'></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit animi cupiditate quae voluptatem, quisquam porro iusto eaque error omnis molestiae alias architecto veniam provident minus reiciendis rerum tenetur pariatur itaque est blanditiis consectetur. Animi ipsam earum quis voluptatum voluptates architecto vel obcaecati! Deleniti, rerum, necessitatibus consequuntur aliquam animi accusamus enim velit inventore et odio perspiciatis totam beatae assumenda aspernatur? Cupiditate commodi, voluptatibus non libero eaque dignissimos quaerat consequuntur, sed, itaque veritatis inventore laboriosam labore aut culpa ut. Magnam neque cumque maxime, mollitia quia omnis illum labore perferendis quaerat eum ipsum natus debitis in non accusantium, dolore exercitationem? Quidem, magni illum! Tempore animi deleniti dolores expedita facilis laborum perferendis, deserunt voluptatibus earum iste unde voluptates cumque? Ipsa tempora dolore assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non, officiis nostrum magni est similique? Ducimus non dignissimos dolorem earum.</p>
          </section>

          <section className='text-slate-700 mb-10'>
            <h5 className='font-bold text-2xl mb-2'>Lorem ipsum dolor sit</h5>
            <p className='text-[18px] text-justify'><span className='ms-10'></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit animi cupiditate quae voluptatem, quisquam porro iusto eaque error omnis molestiae alias architecto veniam provident minus reiciendis rerum tenetur pariatur itaque est blanditiis consectetur. Animi ipsam earum quis voluptatum voluptates architecto vel obcaecati! Deleniti, rerum, necessitatibus consequuntur aliquam animi accusamus enim velit inventore et odio perspiciatis totam beatae assumenda aspernatur? Cupiditate commodi, voluptatibus non libero eaque dignissimos quaerat consequuntur, sed, itaque</p>
          </section>

        </div>
      </main>
      


      {/* footer */}
      <Footer />
    </>
  )
}

export default DetailEducation