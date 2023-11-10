import React from 'react'
import { BiSolidCity } from 'react-icons/bi';
const Features = () => {
  return (
    <div className='flex justify-center py-10 bg-[#e9ebee]   ' data-aos="fade-up"
    data-aos-duration="3000">
        <div className=' text-center lg:w-[1200px]  lg:mx-auto '>
            <h1 className='text-2xl font-bold text-blue-700 italic '>Browse By Category </h1>
            <h1 className='text-4xl font-bold my-4  text-[#FF3811]'>Pick A Tour Type</h1>


            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 mt-8 '>
            <div className='flex  flex-col items-center bg-white px-8 py-5 '>
                 <BiSolidCity className='bg-yellow-200 p-3  w-20 h-20 rounded-full'> </BiSolidCity>
                  <div className='mt-3'>
                  <h3 className='text-xl font-bold text-blue-950'>City</h3>
                 <p className='text-blue-950' >10 Tours + </p>
                  </div>
            </div>
            <div className='flex  flex-col items-center bg-white px-8 py-5 '>
                 <BiSolidCity className='bg-yellow-200 p-3  w-20 h-20 rounded-full'> </BiSolidCity>
                  <div className='mt-3'>
                  <h3 className='text-xl font-bold text-blue-950'>Beaches</h3>
                 <p className='text-blue-950' >10 Tours + </p>
                  </div>
            </div>
            <div className='flex  flex-col items-center bg-white px-8 py-5 '>
                 <BiSolidCity className='bg-yellow-200 p-3  w-20 h-20 rounded-full'> </BiSolidCity>
                  <div className='mt-3'>
                  <h3 className='text-xl font-bold text-blue-950'>Boat</h3>
                 <p className='text-blue-950' >10 Tours + </p>
                  </div>
            </div>
            <div className='flex  flex-col items-center bg-white px-8 py-5 '>
                 <BiSolidCity className='bg-yellow-200 p-3  w-20 h-20 rounded-full'> </BiSolidCity>
                  <div className='mt-3'>
                  <h3 className='text-xl font-bold text-blue-950'>Adventure</h3>
                 <p className='text-blue-950' >10 Tours + </p>
                  </div>
            </div>
            <div className='flex  flex-col items-center bg-white px-8 py-5 '>
                 <BiSolidCity className='bg-yellow-200 p-3  w-20 h-20 rounded-full'> </BiSolidCity>
                  <div className='mt-3'>
                  <h3 className='text-xl font-bold text-blue-950'>Hiking</h3>
                 <p className='text-blue-950' >10 Tours + </p>
                  </div>
            </div>
            <div className='flex  flex-col items-center bg-white px-8 py-5 '>
                 <BiSolidCity className='bg-yellow-200 p-3  w-20 h-20 rounded-full'> </BiSolidCity>
                  <div className='mt-3'>
                  <h3 className='text-xl font-bold text-blue-950'>Train</h3>
                 <p className='text-blue-950' >10 Tours + </p>
                  </div>
            </div>
            <div className='flex  flex-col items-center bg-white px-8 py-5 '>
                 <BiSolidCity className='bg-yellow-200 p-3  w-20 h-20 rounded-full'> </BiSolidCity>
                  <div className='mt-3'>
                  <h3 className='text-xl font-bold text-blue-950'>City</h3>
                 <p className='text-blue-950' >10 Tours + </p>
                  </div>
            </div>
            <div className='flex  flex-col items-center bg-white px-8 py-5 '>
                 <BiSolidCity className='bg-yellow-200 p-3  w-20 h-20 rounded-full'> </BiSolidCity>
                  <div className='mt-3'>
                  <h3 className='text-xl font-bold text-blue-950'>City</h3>
                 <p className='text-blue-950' >10 Tours + </p>
                  </div>
            </div>
            
            
       
            </div>
        </div>
    </div>
  )
}

export default Features