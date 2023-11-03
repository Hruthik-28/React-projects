import React from 'react'

function Hero() {
    return (
        <div className='h-auto flex justify-center items-center my-16 '>
            <div className='w-1/4 '>
                <h1 className='text-7xl font-bold w-auto h-auto mb-3'>YOUR FEET DESERVE THE BEST</h1>
                <p className=' mb-3 text-gray-600 font-medium'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='inline-flex gap-5 mb-3'>
                    <button className='bg-red-500 px-4 py-1 text-white text-xl'>Shop Now</button>
                    <button className=' px-4 py-1 text-xl border-2 border-black text-gray-600'>Category</button>
                </div>
                <p className='mb-3'>Also Available on </p>
                <div className='flex gap-2 '>
                    <img src="/amazon.png" alt="" width={20}/>
                    <img src="/flipkart.png" alt="" width={20} />
                </div>
            </div>
            <div className='inline-flex justify-end '>
                <img src="/shoe_image.png" alt="" width={"75%"}/>
            </div>
        </div>
    )
}

export default Hero
