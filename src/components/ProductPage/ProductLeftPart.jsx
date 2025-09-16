import React from 'react'

const ProductLeftPart = () => {
  
  const data = [
    {
      name: 'Woman’s Fashion'
    },
    {
      name: 'Men’s Fashion'
    },
    {
      name: 'Electronics'
    },
    {
      name: 'Home & Lifestyle'
    },
    {
      name: 'Medicine'
    },
    {
      name: 'Sports & Outdoor'
    },
    {
      name: 'Baby’s & Toys'
    },
    {
      name: 'Groceries & Pets'
    },
    {
      name: 'Health & Beauty'
    },

  ]

  return (
    <div className='w-[25%] mt-[32px]'>
      <div className='mb-[15px]'>
        <h3 className='font-primary font-bold text-[20px]'>Shop by Category</h3>
      </div>
      <div>
              {
        data.map((item)=>(
          <div className='mb-4 font-primary'>{item.name}</div>
        ))
      }
      </div>
      <div>
        <h3 className='font-primary font-bold text-[20px] mt-10'>Shop by Color</h3>
        <div className='flex items-center mt-[15px]'>
          <div className='h-[11px] w-[11px] rounded-full bg-[#000000]'></div>
          <p className='font-primary text-[#767676] ml-[10px]'>Color 1</p>
        </div>
        <div className='flex items-center mt-[18px]'>
          <div className='h-[11px] w-[11px] rounded-full bg-[#FF0000]'></div>
          <p className='font-primary text-[#767676] ml-[10px]'>Color 2</p>
        </div>
        <div className='flex items-center mt-[18px]'>
          <div className='h-[11px] w-[11px] rounded-full bg-[#00FF38]'></div>
          <p className='font-primary text-[#767676] ml-[10px]'>Color 3</p>
        </div>
      </div>
    </div>
  )
}

export default ProductLeftPart
