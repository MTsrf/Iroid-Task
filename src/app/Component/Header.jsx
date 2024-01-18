import React from 'react'
import logo from '../../assets/Vector.svg'
const Header = () => {
    return (
        <>
            <header className="fixed top-0 left-0 w-full p-4 z-50 bg-white h-20">
                <div className='max-w-header-full m-auto flex justify-between justify-center'>
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-32 h-auto mr-2" />
                    </div>
                    <nav>
                        <ul className="flex items-center font-sans">
                            <li className="mr-4"><a href="#" className="text-black text-sm">Solutions</a></li>
                            <li className="mr-4"><a href="#" className="text-black text-sm">Platform</a></li>
                            <li className="mr-4"><a href="#" className="text-black text-sm">Industries</a></li>
                            <li className="mr-4"><a href="#" className="text-black text-sm">Featured Insights</a></li>
                            <li className="mr-4"><a href="#" className="text-black text-sm">About Us</a></li>
                            <li className="mr-4"><a href="#" className="text-black text-sm">Careers</a></li>
                            <li className="mr-4"><a href="#" className="text-black text-sm">Our Work</a></li>
                            <button type="button" className="text-white bg-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue dark:focus:ring-blue font-medium rounded-md text-sm px-5 py-2.5 text-center me-2">Free Consultation</button>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className='mt-20 flex justify-center items-center gap-1 bg-fade py-4 font-sans'>
                <span>Innovative augmented reality solutions for eCommerce businesses - </span>
                <span className='text-red cursor-pointer'>View our visual gallery.</span>
                <span>For a free demo, write to us:</span>
                <span className='text-red cursor-pointer'>hello@tulfa.com</span>
            </div>
        </>
    )
}

export default Header
