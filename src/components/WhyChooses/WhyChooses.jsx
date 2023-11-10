import React from 'react'
import { BsCheck } from 'react-icons/bs';
const WhyChooses = () => {
  return (
     <div className='bg-[#e9ebee] py-20 px-5'>
        <div className=' lg:w-[1200px] mx-auto lg:flex  gap-20 '>
        <div className='flex-1 flex justify-center '>
            <img className='md:w-full lg:w-[400px] h-[400px] rounded' src="https://media.istockphoto.com/id/1083091180/photo/businesswoman-on-airport-talking-on-the-smartphone-while-walking-with-hand-luggage-in-train.jpg?s=612x612&w=0&k=20&c=1zhb9VSBhsD8FnM8krBA3sfEql24rw-zQ-ZZ_7JViL4=" alt="" />
        </div>
        <div className='flex-1 space-y-8 lg:space-y-3 mt-10 lg:mt-0 '>
            <h3 className='text-2xl font-bold text-blue-800 italic '>Why Choose Us</h3>
            <h1 className='text-4xl font-bold mt-2 '>Plan Your Trip with Trisog</h1>
            <p className=' mt-2 text-[18px] text-gray-500'>Hoslisticly optimize proactive strategic theme areas rather than effective manufactured products create . Hoslisticly optimize proactive strategic theme areas rather than effective manufactured products create</p>

            <ul>
                <li className='flex items-center gap-2  '> <span className='text-3xl text-blue-700'> <BsCheck /> </span> <span className='text-xl font-bold italic text-[#FF3811]'> Travel Plan</span></li>
                <li className='flex items-center gap-2'> <span className='text-3xl'> <BsCheck /> </span> <span className='text-xl font-bold italic'>Cheap Rates</span></li>
                <li className='flex items-center gap-2'> <span className='text-3xl'> <BsCheck /> </span> <span className='text-xl font-bold italic'> Hand Picked Tour</span></li>
                <li className='flex items-center gap-2'> <span className='text-3xl'> <BsCheck /> </span> <span className='text-xl font-bold italic'> Private Guide</span></li>
                 
            </ul>
           <div className='mt-5'>
           <button className="btn bg-[#FF3811] border-none text-white mr-5 hover:btn-outline hover:text-[#FF3811]">Contact Us</button>
           </div>
        </div>
    </div>
     </div>
  )
}

export default WhyChooses