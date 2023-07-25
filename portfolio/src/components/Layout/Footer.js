import React from 'react'

const Footer = () => {
  return (
    <div className='relative dark:bg-gray-900'>
      <svg className='static bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,0L40,21.3C80,43,160,85,240,90.7C320,96,400,64,480,74.7C560,85,640,139,720,170.7C800,203,880,213,960,186.7C1040,160,1120,96,1200,58.7C1280,21,1360,11,1400,5.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <p className=' text-center text-blue-400 text-2xl font-bold -translate-y-10 absolute'>&copy; 2023 Sushil Singh Rathore. All rights reserved.</p>
    </div>
  )
}

export default Footer
