import React from 'react';
import bgimg from '../../assets/hero.svg';
import contact from '../../assets/contact.svg'
import data from '../Data/data.json'
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
const Portfolio = () => {
    return (
        <>

            <section className="bg-gradient-to-b from-primary-100 via-primary-100 to-primary-500 h-fit relative overflow-x-hidden min-w-fit" style={{ backgroundImage: `url(${bgimg})` }}>
                <div className='pt-36 pb-10 flex flex-col gap-5'>
                    <div className='flex justify-center items-center h-24 font-sans flex-col max-w-6xl m-auto'>
                        <h1 className='text-white text-5xl font-bold leading-[57px]'>Check out our portfolio to discover how we can make your product listings pop.</h1>
                    </div>
                    <div className='flex justify-center items-center h-24 font-sans flex-col max-w-1xl m-auto text-center'>
                        <h1 className='text-white text-lg'>
                            Like the content you see from our portfolio? Click the link below and fill out the contact form to receive a free, personalized demo.
                        </h1>
                    </div>
                    <div className='group cursor-pointer flex text-white justify-center items-center gap-3 '>
                        <img src={contact} alt="contact" className='transition duration-300 transform group-hover:scale-110' />
                    </div>
                </div>
                <img src="/svg/star.svg" alt="star1" className='absolute top-32 left-32 w-4' />
                <img src="/svg/star.svg" alt="star1" className='absolute top-72 left-96 w-2' />
                <img src="/svg/star.svg" alt="star1" className='absolute top-96 left-24 w-1' />
                <img src="/svg/star.svg" alt="star1" className='absolute top-96 right-32 w-4' />
                <img src="/svg/star.svg" alt="star1" className='absolute top-72 right-96 w-2' />
                <img src="/svg/star.svg" alt="star1" className='absolute top-16 right-64 w-2' />
                <div className='flex pb-1 gap-6 p-8'>
                    {data?.map((item) => (
                        <div key={item.id} className='relative w-60 h-80 overflow-hidden rounded-md shadow-md hover:shadow-lg'>
                            <img src={item.image} alt={item.name} className='w-full h-full object-cover rounded-md' />
                            <div className='absolute inset-0 bottom-8 flex flex-col items-center justify-end gap-0'>
                                <h1 className='bg-black bg-opacity-0 text-white font-sans font-semibold text-center rounded-b-lg'>
                                    {item.name}
                                </h1>
                                <button
                                    type="button"
                                    className="text-white bg-btn hover:bg-blue-dark focus:ring-4 focus:outline-none focus:ring-btn dark:focus:ring-btn font-medium rounded-sm font-sans font-bold text-sm px-8 py-2.5 mt-2 transition duration-300"
                                >
                                    Play Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-between max-w-header-full m-auto py-4'>
                    <HiArrowLongLeft className='text-white text-3xl cursor-pointer' style={{ width: '40px', height: '40px' }} />
                    <HiArrowLongRight className='text-white text-3xl cursor-pointer' style={{ width: '40px', height: '40px' }} />
                </div>
            </section >


        </>
    );
};

export default Portfolio;
