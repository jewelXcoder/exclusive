import React from 'react'
import Container from '../Layout/Container'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'

const Banner = () => {
  return (
    <div className='pt-10'>
    <Container>
     <div className='flex'>
       <BannerLeft/>
      <BannerRight/>
     </div>
    </Container>
    </div>
  )
}

export default Banner
