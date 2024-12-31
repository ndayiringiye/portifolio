import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='bg-black text-white flex justify-between w-11/12 mx-auto text-center py-4'>
            <h1 className='font-serif font-bold uppercase text3xl'>bio<span className='text-blue-400 '>status</span></h1>
            <h2>&copy; copyright {new Date().getFullYear()} All right reserved</h2>
        </div>
    </div>
  )
}

export default Footer