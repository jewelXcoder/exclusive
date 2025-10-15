import React, { useEffect, useState } from 'react'
import product from '../../assets/product.png'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import ProductRating from './ProductRating';
import { Link } from 'react-router';

const ProductRightPart = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [productData, setProductData] = useState([])

  const productPerPage = 6;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data.products))
  }, [])

  // const productData = [
  //   {
  //     name: 'The north coat',
  //     price: '$260',
  //     img: product
  //   },
  // ]

  // console.log(productData)

  // console.log(productData.length)

  const totalProducts = productData.length
  const totalPages = Math.ceil(totalProducts / productPerPage)
  const indexOfLastProduct = currentPage * productPerPage
  const indexOfFirstProduct = indexOfLastProduct - productPerPage

  const currentProduct = productData.slice(indexOfFirstProduct, indexOfLastProduct)

  const data = [...Array(totalPages).keys()].map((index) => index + 1)

  return (
    <div className='w-[75%]'>
      <div className='flex flex-wrap gap-x-[30px] gap-y-[60px]'>

        {
          currentProduct.map((product) => (
            <div>
              <Link to={`/product/${product.id}`} className='relative group w-[270px] py-[52px] px-[65px] inline-block rounded bg-[#F5F5F5]'>
                <img src={product.thumbnail} alt="" />
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
              </Link>
              <div>
                <p className='font-primary font-medium text-[11px]'>{product.title}</p>
                <p className='font-primary font-medium text-primary mt-2'>{product.price} <del className='text-black/50 ml-3'>$360</del></p>
                <div className='flex items-center mt-2'>
                  {/* <div className='flex items-center text-xl text-[#FFAD33]'>
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                  </div>
                  <p className='font-primary font-semibold text-black/50 ml-2'>({product.reviews.length})</p> */}


                  <ProductRating rating={product.rating} />
                  <p className='text-black/50 ml-2'>({product.reviews.length})</p>

                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className='flex gap-x-3 mt-10'>
        {
          data.map((item) => (
            <div
              className={`cursor-pointer py-2 px-4 rounded ${currentPage === item ? "bg-black text-white" : "bg-gray-400 text-black"}`}
              onClick={() => setCurrentPage(item)}
            >{item}</div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductRightPart
