import React from 'react'

const RenderedTime = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='flex gap-x-5'>
      <div className=' flex justify-center items-center w-[62px] h-[62px] rounded-full bg-white'>
       <div className='flex flex-col justify-center items-center px-[15px] py-[15px]'>
         <p className='font-primary font-semibold'>{days}</p>
        <p className='font-primary text-[11px]'>Days</p>
       </div>
      </div>
      <div className=' flex justify-center items-center w-[62px] h-[62px] rounded-full bg-white'>
       <div className='flex flex-col justify-center items-center px-[15px] py-[15px]'>
         <p className='font-primary font-semibold'>{hours}</p>
        <p className='font-primary text-[11px]'>Days</p>
       </div>
      </div>
      <div className=' flex justify-center items-center w-[62px] h-[62px] rounded-full bg-white'>
       <div className='flex flex-col justify-center items-center px-[15px] py-[15px]'>
         <p className='font-primary font-semibold'>{minutes}</p>
        <p className='font-primary text-[11px]'>Days</p>
       </div>
      </div>
      <div className=' flex justify-center items-center w-[62px] h-[62px] rounded-full bg-white'>
       <div className='flex flex-col justify-center items-center px-[15px] py-[15px]'>
         <p className='font-primary font-semibold'>{seconds}</p>
        <p className='font-primary text-[11px]'>Days</p>
       </div>
      </div>
    </div>
  )
}

export default RenderedTime
