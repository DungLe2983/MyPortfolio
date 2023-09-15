import React from 'react'
import portfolios from '../../assets/data/portfolioData'

const Modal = ({activeID, setShowModal}) => {
  const portfolio = portfolios.find(portfolio => portfolio.id === activeID)
  return (
    <div className='w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40'>
      <div className="w-11/12 md:w-full md:max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-lg transform -translate-x-1/2 -translate-y-1/2 p-4">
        <div>
          <figure>
             <img className='rounded-lg' src={portfolio.imgUrl} alt="" />
          </figure>
        </div>
        <div>
            <h2 className='text-xl text-headingColor font-[700] my-4'>{portfolio.title}</h2>
            <p className='text-[15px] leading-7 text-smallTextColor'>{portfolio.description}</p>
            <div className='mt-5 flex items-center gap-3 flex-wrap'>
              <h4 className='text-[16px] text-headingColor font-[700]'> Technologies: </h4>
              {
                portfolio.technologies.map((item, index) =>
                <span
                key={index}
                className=' bg-gray-300 px-2 py-1 rounded-[5px]'>
                  {item}
                </span>)
              }
            </div>
        </div>
        <button
        onClick={()=>setShowModal(false)}
        className='w-[1.8rem] h-[1.8rem] absolute top-[1.7rem] right-[1.7rem] rounded-full bg-slate-200 text-[20px] font-[700] flex justify-center items-center hover:bg-slate-300' >
          &times;
        </button>

      </div>
    </div>
  )
}

export default Modal
