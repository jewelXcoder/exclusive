import React, { useState } from 'react'
import Container from '../Layout/Container'
import product from '../../assets/product.png'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import SectionHead from '../HeadingSection/SectionHead';
import SectionSubHead from '../HeadingSection/SectionSubHead';

const ExploreOurProducts = () => {

  const [visible, setVisible] = useState(4)

  const HandleLoadData = () => {
    setVisible((prev) => prev + 4)
  }

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
    <div className='pt-[161px] pb-[42px]'>
      <Container>
        <div>
          <SectionHead>
            Our Products
          </SectionHead>
          <SectionSubHead>
            Explore Our Products
          </SectionSubHead>
          <div className='flex flex-wrap gap-x-[30px] gap-y-[60px] mt-[60px]'>

            {
              productData.slice(0, visible).map((item) => (
                <div>
                  <div className='relative py-[52px] px-[65px] inline-block rounded bg-[#F5F5F5]'>
                    <img src={item.img} alt="" />
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
          {
            visible < productData.length && (
              <div className='mt-[60px] text-center'>
                <button onClick={HandleLoadData} className='px-12 py-4 bg-primary rounded text-white font-primary'>View More Products</button>
              </div>
            )
          }
        </div>

      </Container>
    </div>
  )
}

export default ExploreOurProducts
