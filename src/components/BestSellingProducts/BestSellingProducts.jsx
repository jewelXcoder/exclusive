import React from 'react'
import Container from '../Layout/Container'
import product from '../../assets/product.png'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import SectionHead from '../HeadingSection/SectionHead';
import SectionSubHead from '../HeadingSection/SectionSubHead';

const BestSellingProducts = () => {

  const productData = [
    {
      name: 'The north coat',
      price: '$260',
      img: product
    },
    {
      name: 'The north coat',
      price: '$260',
      img: product
    },
    {
      name: 'The north coat',
      price: '$260',
      img: product
    },
    {
      name: 'The north coat',
      price: '$260',
      img: product
    },
  ]

  return (
    <div className=' pt-[122px]'>
      <Container>
        <div>
          <SectionHead>
            This Month
          </SectionHead>
          <div className='flex items-center justify-between'>
            <SectionSubHead>
              Best Selling Products
            </SectionSubHead>
            <div>
              <button className='py-4 px-12 bg-primary text-white font-primary font-medium rounded'>View All</button>
            </div>
          </div>
          <div className='flex flex-wrap gap-x-[30px] gap-y-[60px] mt-[60px]'>

            {
              productData.map((item) => (
                <div>
                  <div className='group relative w-[270px] py-[52px] px-[65px] inline-block rounded bg-[#F5F5F5]'>
                    <img src={item.img} alt="" />
                    <div className='absolute top-3 right-3'>
                      <div className='flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#ffffff]'>
                        <FaRegHeart size={16} />
                      </div>
                      <div className='flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#ffffff] mt-2'>
                        <IoEyeOutline size={20} />
                      </div>
                    </div>
                    <div>
                      <p className='hidden group-hover:block transition-all duration-100 absolute bottom-0 left-0 w-full py-2  bg-[#000000] text-white text-center'>Add To Cart</p>
                    </div>
                  </div>
                  <div>
                    <p className='font-primary font-medium'>{item.name}</p>
                    <p className='font-primary font-medium text-primary mt-2'>{item.price} <del className='text-black/50 ml-3'>$360</del></p>
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
              ))
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BestSellingProducts
