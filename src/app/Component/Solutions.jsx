import React from 'react'
import data from '../Data/solution.json'
const Solutions = () => {
    return (
        <>
            <section>
                <div className='text-center pt-14 pb-5'>
                    <h1 className='font-sans font-bold text-4xl'>Our Solutions</h1>
                </div>
                <div className='flex justify-center'>
                    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <li class="me-2">
                            <a href="#" class="inline-block px-6 py-1 text-black bg-blue-600 rounded-2xl active" aria-current="page">
                                All
                            </a>
                        </li>
                        <li class="me-2">
                            <a href="#" class="inline-block px-6 py-1 rounded-2xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                                CGI
                            </a>
                        </li>
                        <li class="me-2">
                            <a href="#" class="inline-block px-6 py-1 rounded-2xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                                Enhanced Brand Content
                            </a>
                        </li>
                        <li class="me-2">
                            <a href="#" class="inline-block px-6 py-1 rounded-2xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                                Product Photography
                            </a>
                        </li>
                        <li>
                            <a class="inline-block px-6 py-1 text-gray-400 rounded-2xl cursor-not-allowed dark:text-gray-500">
                                Creative Services
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="flex flex-wrap justify-between pt-10">
                    {data?.map((item, index) => (
                        <div key={index} className="flex-shrink-0 mb-4">
                            <img src={item.image} alt="" className="max-w-full" />
                            <div className={`mt-0 ${item?.color === "red" ? "bg-red" : "bg-pink"} h-28 flex justify-center items-center flex-col`}>
                                <h1 className={`${item?.color === "red" ? "text-white" : "text-black"} font-sans font-semibold`}>{item?.name}</h1>
                                <p className={`${item?.color === "red" ? "text-white" : "text-black"}`}>{item?.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Solutions
