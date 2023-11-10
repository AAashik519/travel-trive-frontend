import React from 'react'

const Banner = () => {
  return (
    <div className='px-5'>
    <div className="carousel w-full h-[600px]">
<div id="slide1" className="carousel-item relative w-full">
<img src='https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=826&t=st=1699469452~exp=1699470052~hmac=3214daf59bb4c17a77b2df13996baee9262abf1d720d3ecc0c2c1b5d74145af0' className="w-full rounded-xl" />
<div className="absolute rounded-xl h-full flex items-center justify-start gap-8  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00));

] ">
  <div className='text-white space-y-6 w-3/4 pl-12'>
    <h2 className=' text-4xl lg:text-6xl font-semibold'>Discover Your Next Adventure  </h2>
    <h2 className='text-3xl lg:text-4xl font-semibold'> The Ultimate Travel Guide</h2>
    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
    <div >
    <button className="btn bg-[#FF3811] border-none text-white mr-5 hover:btn-outline hover:text-[#FF3811] mb-5">Discover More</button>
    <button className="btn btn-outline border-white text-white hover:text-[#FF3811]">Latest Project</button>
    </div>
  </div>
</div>
<div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5  bottom-0 ">
  <a href="#slide3" className="btn btn-circle  ">❮</a> 
  <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none text-white hover:btn-outline" >❯</a>
</div>
</div> 
<div id="slide2" className="carousel-item relative w-full">

<img src='https://img.freepik.com/free-photo/wat-phra-kaew-temple-emerald-buddha-grand-palace-bangkok_554837-434.jpg?w=740&t=st=1699471045~exp=1699471645~hmac=b0eae282881f9cf32f797198d5efd3deccd4dc7cb8be4216f7d5345eec67e03b' className="w-full  rounded-xl" />

<div className="absolute rounded-xl h-full flex items-center justify-start gap-8  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00));

] ">
  <div className='text-white space-y-6 w-3/4 pl-12'>
  <h2 className='text-4xl lg:text-6xl  font-semibold'>Discover Your Next Adventure  </h2>
    <h2 className='text-3xl lg:text-4xl font-semibold'> The Ultimate Travel Guide</h2>
    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
    <div>
    <button className="btn bg-[#FF3811] border-none text-white mr-5 hover:btn-outline hover:text-[#FF3811] mb-5">Discover More</button>
    <button className="btn btn-outline border-white text-white hover:text-[#FF3811]">Latest Project</button>
    </div>
  </div>
</div>
<div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5  bottom-0">
  <a href="#slide1" className="btn btn-circle">❮</a> 
  <a href="#slide3" className="btn btn-circle  bg-[#FF3811] border-none text-white hover:btn-outline">❯</a>
</div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
<img src='https://t4.ftcdn.net/jpg/06/36/02/73/240_F_636027337_QscKpKYKr4bdNk7U5hYZPHcYeC6f6MRL.jpg' className="w-full  rounded-xl" />

<div className="absolute rounded-xl h-full flex items-center justify-start gap-8  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00));

] ">
  <div className='text-white space-y-6 w-3/4 pl-12'>
  <h2 className='text-4xl lg:text-6xl font-semibold'>Discover Your Next Adventure  </h2>
    <h2 className='text-3xl lg:text-4xl font-semibold'> The Ultimate Travel Guide</h2>
    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
    <div>
    <button className="btn bg-[#FF3811] border-none text-white mr-5 hover:btn-outline hover:text-[#FF3811] mb-5">Discover More</button>
    <button className="btn btn-outline border-white text-white hover:text-[#FF3811]">Latest Project</button>
    </div>
  </div>
</div>
<div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5  bottom-0">
  <a href="#slide2" className="btn btn-circle">❮</a> 
  <a href="#slide1" className="btn btn-circle  bg-[#FF3811] border-none text-white hover:btn-outline">❯</a>
</div>
</div> 


</div>
</div>
  )
}

export default Banner