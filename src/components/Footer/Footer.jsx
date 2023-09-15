import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#12141e] py-6 '>
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className='w-full sm:w-1/2 '>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Do you want to create beautiful products?
            </h2>
            <a href="#contact">
                  <button className=' bg-primaryColor hover:bg-smallTextColor text-white hover:text-white font-[500] flex items-center gap-2 ease-in duration-300 py-2 px-4 rounded-[8px]'>
                    <i class="ri-mail-line" > Hire me</i>
                  </button>
            </a>
          </div>
          <div className='w-full sm:w-1/2 '>
            <p className=' text-gray-300 leading-7 mt-4 sm:mt-0'>
              We strive to create products that are not only functional but also visually stunning, captivating users with their beauty.
            </p>
            <div className='flex items-center gap-4 flex-wrap mt-8 md:gap-8'>
              <span className='text-gray-300 text-[15px] font-[600] '>
                Follow Me
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a
                href="https://github.com/DungLe2983"
                target='blank'
                className='text-gray-300 text-[18px] font-[500]'>
                  <i class="ri-github-line"></i></a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a
                href="https://www.linkedin.com/in/qu%E1%BB%91c-d%C5%A9ng-l%C3%AA-00253b290/"
                target='blank'
                className='text-gray-300 text-[18px] font-[500]'>
                  <i class="ri-linkedin-line"></i></a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a
                href="https://www.instagram.com/quocdung2983/"
                target='blank'
                className='text-gray-300 text-[18px] font-[500]'>
                  <i class="ri-instagram-line"></i></a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a
                href="https://www.facebook.com/quocdung.le.31945"
                target='blank'
                className='text-gray-300 text-[18px] font-[500]'>
                  <i class="ri-facebook-line"></i></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
