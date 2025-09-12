import React from 'react'
import Container from '../Layout/Container'
import product from '../../assets/product.png'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const BestSellingProducts = () => {
  return (
    <div className=' pt-[122px]'>
      <Container>
        <div>
          <div className='flex items-center'>
            <div className='w-[20px] h-[40px] rounded bg-primary'>
            </div>
            <p className='font-primary font-semibold text-primary ml-4'>This Month</p>
          </div>
          <div className='flex items-center justify-between mt-5'>
            <div className='font-secondary font-semibold text-[36px]'>Best Selling Products</div>
            <div>
              <button className='py-4 px-12 bg-primary text-white font-primary font-medium rounded'>View All</button>
            </div>
          </div>
          <div className='flex gap-x-[30px] mt-[60px]'>
            <div>
              <div className='relative py-[52px] px-[65px] inline-block rounded bg-[#F5F5F5]'>
                <img src={product} alt="" />
                <div className='absolute top-3 right-3'>
                  <div className='flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#ffffff]'>
                    <FaRegHeart size={16} />
                  </div>
                  <div className='flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#ffffff] mt-2'>
                    <IoEyeOutline size={20} />
                  </div>
                </div>
              </div>
              <div>
                <p className='font-primary font-medium'>The north coat</p>
                <p className='font-primary font-medium text-primary mt-2'>$260 <del className='text-black/50 ml-3'>$360</del></p>
                <div className='flex items-center mt-2'>
                  <div className='flex items-center text-xl text-[#FFAD33]'>
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                  </div>
                  <p className='font-primary font-semibold text-black/50 ml-2'>(65)</p>
                </div>
              </div>
            </div>
            <div>
              <div className='relative py-[52px] px-[65px] inline-block rounded bg-[#F5F5F5]'>
                <img src={product} alt="" />
                <div className='absolute top-3 right-3'>
                  <div className='flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#ffffff]'>
                    <FaRegHeart size={16} />
                  </div>
                  <div className='flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#ffffff] mt-2'>
                    <IoEyeOutline size={20} />
                  </div>
                </div>
              </div>
              <div>
                <p className='font-primary font-medium'>The north coat</p>
                <p className='font-primary font-medium text-primary mt-2'>$260 <del className='text-black/50 ml-3'>$360</del></p>
                <div className='flex items-center mt-2'>
                  <div className='flex items-center text-xl text-[#FFAD33]'>
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                  </div>
                  <p className='font-primary font-semibold text-black/50 ml-2'>(65)</p>
                </div>
              </div>
            </div>
            <div>
              <div className='relative py-[52px] px-[65px] inline-block rounded bg-[#F5F5F5]'>
                <img src={product} alt="" />
                <div className='absolute top-3 right-3'>
                  <div className='flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#ffffff]'>
                    <FaRegHeart size={16} />
                  </div>
                  <div className='flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#ffffff] mt-2'>
                    <IoEyeOutline size={20} />
                  </div>
                </div>
              </div>
              <div>
                <p className='font-primary font-medium'>The north coat</p>
                <p className='font-primary font-medium text-primary mt-2'>$260 <del className='text-black/50 ml-3'>$360</del></p>
                <div className='flex items-center mt-2'>
                  <div className='flex items-center text-xl text-[#FFAD33]'>
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                  </div>
                  <p className='font-primary font-semibold text-black/50 ml-2'>(65)</p>
                </div>
              </div>
            </div>
            <div>
              <div className='relative py-[52px] px-[65px] inline-block rounded bg-[#F5F5F5]'>
                <img src={product} alt="" />
                <div className='absolute top-3 right-3'>
                  <div className='flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#ffffff]'>
                    <FaRegHeart size={16} />
                  </div>
                  <div className='flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#ffffff] mt-2'>
                    <IoEyeOutline size={20} />
                  </div>
                </div>
              </div>
              <div>
                <p className='font-primary font-medium'>The north coat</p>
                <p className='font-primary font-medium text-primary mt-2'>$260 <del className='text-black/50 ml-3'>$360</del></p>
                <div className='flex items-center mt-2'>
                  <div className='flex items-center text-xl text-[#FFAD33]'>
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                  </div>
                  <p className='font-primary font-semibold text-black/50 ml-2'>(65)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BestSellingProducts
