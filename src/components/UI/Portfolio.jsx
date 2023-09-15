import React from 'react'
import data from '../../assets/data/portfolioData'
import { useState, useEffect } from 'react'
import Modal from './Modal'

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolio, setPortfolio] = useState(data);
  const [selectTab, setSelectTab] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [activeID , setActiveID] = useState(null)
  const loadMoreHandler = () =>{
    setNextItems(prev => prev+3)
  }
  const showModalHandler = id =>{
    setShowModal(true);
    setActiveID(id);
  }
  useEffect(()=>{
    if(selectTab === 'all'){
      setPortfolio(data)
    }
    if(selectTab === 'web-design'){
      const filteredData = data.filter(item => item.category === 'Web Design')
      setPortfolio(filteredData)
    }
    if(selectTab === 'ux-design'){
      const filteredData = data.filter(item => item.category === 'Ux')
      setPortfolio(filteredData)
    }
  },[selectTab])
  return (
    <section id='portfolio'>
      <div className="container">
        <div className='flex items-center justify-between flex-wrap'>
          <div className="sm:mb-0">
            <h3 className=' text-headingColor text-[2rem] font-[700]'>
              My recent Projects
            </h3>
          </div>
          <div className='flex gap-3'>
            <button onClick={()=>{setSelectTab('all')}} className=' text-smallTextColor border border-solid border-smallTextColor px-4 py-2 rounded-lg'>All</button>
            <button onClick={()=>{setSelectTab('web-design')}} className=' text-smallTextColor border border-solid border-smallTextColor px-4 py-2 rounded-lg'>Web Design</button>
            <button onClick={()=>{setSelectTab('ux-design')}} className=' text-smallTextColor border border-solid border-smallTextColor px-4 py-2 rounded-lg'>UI-UX</button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-2">
          {
            portfolio?.slice(0,nextItems)?.map((portfolio,index)=>(
              <div
                key={index}
                data-aos-duration='1000'
                data-aos-delay='50'
                data-aos='fade-zoom-in'
               className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                <figure>
                  <img src={portfolio.imgUrl} alt="" className='rounded-[8px]' />
                </figure>
                <div className='w-full h-full bg-primaryColor top-0 left-0 bg-opacity-40 absolute z-[5] hidden group-hover:block'>
                  <div className='w-full h-full items-center flex justify-center'>
                    <button onClick={()=>showModalHandler(portfolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor px-4 py-2 rounded-lg font-[500] ease-in duration-200'>See Detail</button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className='text-center mt-4'>
          {
          nextItems < portfolio.length && data.length> 6 && (<button
          onClick={loadMoreHandler}
          className='text-white bg-primaryColor hover:bg-smallTextColor px-4 py-2 rounded-lg font-[500] ease-in duration-200'>
            Load More
          </button>
          )}

        </div>
      </div>
      {
        showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
      }
    </section>
  )
}

export default Portfolio
