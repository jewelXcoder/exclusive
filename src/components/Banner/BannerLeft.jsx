import React from 'react'

const BannerLeft = () => {

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
    <div className='w-[18%] relative after:absolute after:content-"" after:h-[384px] after:w-[1px] after:top-[-40px] after:right-0 after:bg-black/30'>
      {/* <div>
        <ul className=''>
          <li><a href="">Woman’s Fashion</a></li>
          <li><a href="">Men’s Fashion</a></li>
          <li><a href="">Electronics</a></li>
          <li><a href="">Home & Lifestyle</a></li>
          <li><a href="">Medicine</a></li>
          <li><a href="">Sports & Outdoor</a></li>
          <li><a href="">Baby’s & Toys</a></li>
          <li><a href="">Groceries & Pets</a></li>
          <li><a href="">Health & Beauty</a></li>
        </ul>
      </div> */}
      {
        data.map((item)=>(
          <div className='mb-4 font-primary'>{item.name}</div>
        ))
      }
    </div>
  )
}

export default BannerLeft
