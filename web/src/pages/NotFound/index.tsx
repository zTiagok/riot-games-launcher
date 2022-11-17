import React from 'react'

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-full font-typoldRegular tracking-tight'>
      <div className='flex flex-col items-center justify-center mb-8'>
        <p className='font-typoldRegular text-9xl mb-4'>
          404
        </p>
        <p>
          Page not found.
        </p>
      </div>
      <a href="/" className='flex items-center justify-center bg-red-400 w-32 h-16 rounded-xl font-typoldBold text-white'>
        Go back!
      </a>
    </div>
  )
}

export default NotFound