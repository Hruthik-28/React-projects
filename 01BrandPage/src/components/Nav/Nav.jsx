import React from 'react'

function Nav() {
    return (
        <nav className='w-90 h-4.5 flex justify-between px-20 py-4 items-center mb-1'>
            <div>
                <img src="/brand_logo.png" alt="logo" width={60}/>
            </div>
            <div>
                <ul  className='flex gap-5 font-semibold '>
                    <li>MENU</li>
                    <li>LOCATION</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className="btn">
                <button className='bg-red-500 px-4 py-1 text-white'>Login</button>
            </div>
            <div className='flex justify-center items-center'>
                <img src="/01BrandPage/public/brand_logo.png" alt="" />
            </div>
        </nav>
    )
}

export default Nav
