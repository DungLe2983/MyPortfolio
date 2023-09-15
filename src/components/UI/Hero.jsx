import React from 'react'
import MyImage from '../../assets/images/bbb.jpg';
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <section className='pt-0' id='about'>
      <div className='container pt-14'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          {/* Hero left content */}
          <div className='w-full md:basis-1/2'>
            <h5
            data-aos='fade-right'
            data-aos-duration='1500'
            className=' text-headingColor font-[600] text-[20px]'>
              Hello Welcome</h5>
            <h1
            data-aos='fade-up'
            data-aos-duration='1500'
            className=' text-headingColor font-[800] text-[1.8rem] sm:text-[40px] mt-5 leading-[35px] md:leading-[46px]'>
            I'm Le Quoc Dung <br/>
            Software Developer</h1>
            <div
            data-aos='fade-up'
            data-aos-duration='1800'
            data-aos-delay='200'
            className='flex items-center gap-6 mt-7'>
                <a href="#contact">
                  <button className=' bg-primaryColor hover:bg-smallTextColor text-smallTextColor hover:text-white font-[500] flex items-center gap-2 ease-in duration-300 py-2 px-4 rounded-[8px]'>
                    <i class="ri-mail-line" > Hire me</i>
                  </button>
                </a>
                <a href="#portfolio" className=' text-smallTextColor border-b border-solid border-smallTextColor font-[600] text-[16px]'> See Portfolio</a>
            </div>
            <p
            data-aos='fade-left'
            data-aos-duration='1500'
            className='flex gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 mt-8'>
              <span>
                <i class="ri-apps-line"></i>
              </span>
              Studying at UIT (University of Information Technology), specializing in Software Engineering. I'm deeply passionate about the world of technology and software development. Currently, I'm honing my skills and knowledge in various areas of software engineering, including programming languages, software design. I believe that continuous learning is crucial in this ever-evolving field, and I'm committed to staying updated with the latest trends and advancements.
            </p>
            <div className='flex gap-9 items-center mt-8'>
              <span className='text-smallTextColor text-[16px] font-[600]'>Follow me:</span>
              <span className='flex gap-12'>
                <a href="https://www.facebook.com/quocdung.le.31945"
                target='blank'
                className=' text-smallTextColor text-[16px] font-[600]'>
                  <i class="ri-facebook-circle-fill"></i>
                </a>
                <a href="https://github.com/DungLe2983"
                  target='blank'
                  className=' text-smallTextColor text-[16px] font-[600]'>
                  <i class="ri-github-fill"></i>
                </a>
                <a href="https://www.instagram.com/quocdung2983/"
                target='blank'
                className=' text-smallTextColor text-[16px] font-[600]'>
                  <i class="ri-instagram-line"></i>
                </a>
                <a href="https://www.linkedin.com/in/qu%E1%BB%91c-d%C5%A9ng-l%C3%AA-00253b290/"
                target='blank'
                className=' text-smallTextColor text-[16px] font-[600]'>
                  <i class="ri-linkedin-box-fill"></i>
                </a>
                
              </span>
            </div>
          </div>
          {/* Hero left content */}
          {/* Hero Image */}
          <div className=' basis-1/3 mt-10 sm:mt-2' >
            <figure className='flex justify-center items-center'>
              <img src={MyImage}alt='' class="max-w-full h-auto sm:max-w-xs"/>
            </figure>
          </div>
          {/* Hero Image */}
          {/* Hero Right content */}
          <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end' >
            <div className='mb-10'>
              <h2 className=' text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={2} duration={2} suffix='+'/>
              </h2>
              <h4 className=' text-headingColor font-[600] text-[18px]'>
                Year of experience
              </h4>
            </div>
            <div className='mb-10'>
              <h2 className=' text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={14} duration={2} suffix='+'/>
              </h2>
              <h4 className=' text-headingColor font-[600] text-[18px]'>
                Projects Completed
              </h4>
            </div>
            <div className='mb-10'>
              <h2 className=' text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={100} duration={2} suffix='%'/>
              </h2>
              <h4 className=' text-headingColor font-[600] text-[18px]'>
                Success Rate
              </h4>
            </div>
          </div>
          {/* Hero Right content */}
        </div>
      </div>
    </section>
  )
}

export default Hero
