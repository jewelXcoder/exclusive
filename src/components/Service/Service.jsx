import React from 'react'
import Container from '../Layout/Container'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'


const Service = () => {
  return (
    <div className='pb-[167px]'>
      <Container>
        <div className='flex justify-center items-center gap-x-[88px]'>
          <div className='flex flex-col w-[249px]'>
            <div className='flex justify-center items-center m-auto w-[58px] h-[58px] rounded-full bg-black border-[11px] border-[#C1C0C1]'>
              <img className='h-[40px] p-[9px]' src={service1} alt="" />
            </div>
            <h3 className='font-primary font-semibold text-[20px] mt-6'>FREE AND FAST DELIVERY</h3>
            <p className='font-primary text-[14px] mt-2'>Free delivery for all orders over $140</p>
          </div>
          <div className='flex flex-col w-[249px]'>
            <div className='flex justify-center items-center m-auto w-[58px] h-[58px] rounded-full bg-black border-[11px] border-[#C1C0C1]'>
              <img className='h-[40px] p-[9px]' src={service2} alt="" />
            </div>
            <h3 className='font-primary font-semibold text-[20px] mt-6'>FREE AND FAST DELIVERY</h3>
            <p className='font-primary text-[14px] mt-2'>Free delivery for all orders over $140</p>
          </div>
          <div className='flex flex-col w-[249px]'>
            <div className='flex justify-center items-center m-auto w-[58px] h-[58px] rounded-full bg-black border-[11px] border-[#C1C0C1]'>
              <img className='h-[40px] p-[9px]' src={service3} alt="" />
            </div>
            <h3 className='font-primary font-semibold text-[20px] mt-6'>FREE AND FAST DELIVERY</h3>
            <p className='font-primary text-[14px] mt-2'>Free delivery for all orders over $140</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Service
