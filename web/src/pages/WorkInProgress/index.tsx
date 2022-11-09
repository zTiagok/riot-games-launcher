import React from 'react'

function WorkInProgress() {
  return (
    <div className='flex flex-col items-center justify-center h-full font-typoldRegular tracking-tight'>
      <div className='flex flex-col items-center justify-center mb-8'>
        <p>
          This feature is currently not working.
        </p>
        <p>
          Sorry about that.
        </p>
      </div>
      <a href="/" className='flex items-center justify-center bg-red-400 w-32 h-16 rounded-xl font-typoldBold text-white'>
        Go back!
      </a>
    </div>
  )
}

export default WorkInProgress