import React from 'react';
import frontendImg from '../../assets/images/front-end.png';
import backendImg from '../../assets/images/backend.png';
import appImg from '../../assets/images/apps.png';
import designImg from '../../assets/images/design.png';
const Services = () => {
    return (
        <section id='services'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-[24px] mb-5 font-[800] text-headingColor'>
                        What can I help you ?
                    </h2>
                    <p className='lg:max-w-[400px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 '>
                        Bringing your ideas to life with innovation
                        <br />
                        Let me be your trusted Information Technology partner
                        <i class='ri-heart-line ml-1'></i>
                    </p>
                </div>
                <div className='flex flex-col justify-center sm:py-12'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                        <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                            {/* Vertical line running through the middle */}
                            <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2'></div>
                            {/* Left Card */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center sm:flex-row flex-col'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div
                                                data-aos='fade-right'
                                                data-aos-duration='1200'
                                                className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                                            >
                                                <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                                    Frontend Development
                                                </h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] leading-7'>
                                                    {' '}
                                                    HTML, CSS, XML, Reactjs,
                                                    Nextjs, TailwindCSS,
                                                    Bootstrap.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={frontendImg} alt='' />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* Right Card */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center sm:flex-row flex-col'>
                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div
                                                data-aos='fade-left'
                                                data-aos-duration='1200'
                                                className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                                            >
                                                <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                                    Backend Development
                                                </h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] leading-7'>
                                                    {' '}
                                                    Javascript, Nodejs, Java, C++,
                                                    C#,.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={backendImg} alt='' />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* Left Card */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center sm:flex-row flex-col'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div
                                                data-aos='fade-right'
                                                data-aos-duration='1200'
                                                className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                                            >
                                                <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                                    {' '}
                                                    Databases & Cloud Services{' '}
                                                </h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] leading-7'>
                                                    MongoDB, FireBase, SQL
                                                    Server
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={designImg} alt='' />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* Right Card */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center sm:flex-row flex-col'>
                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div
                                                data-aos='fade-left'
                                                data-aos-duration='1200'
                                                className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                                            >
                                                <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>
                                                    Other Tools
                                                </h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] leading-7'>
                                                    Git, Notions, Trello, Slack,
                                                    Figma, Canva.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={appImg} alt='' />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
