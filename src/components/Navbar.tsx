import React from 'react'

export default function Navbar() {
  return (
      <div className='shadow-bg w-full h-10 bg-white'>
          <div className='flex justify-between items-center h-full px-4'>
              <div className='flex items-center'>
                  <div className='w-5 h-5 bg-sky-500 rounded-full'></div>
                  <div className='ml-2 text-xl font-semibold'>Resturaunt food</div>
              </div>
              <div className='flex items-center'>
                  <div className='mr-2 text-xl font-semibold hover:text-sky-500 cursor-pointer
                  '>Home</div>
                  <div className='mr-2 text-xl font-semibold'>About</div>
                    <div className='mr-2 text-xl font-semibold'>Login</div>
              </div>
          </div>
        </div>
          
  )
}
