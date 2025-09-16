import React from 'react'
import Container from '../components/Layout/Container'
import ProductLeftPart from '../components/ProductPage/ProductLeftPart'
import ProductRightPart from '../components/ProductPage/ProductRightPart'

const Product = () => {
  return (
    <div className='pt-[80px] pb-[104px]'>
    <Container>
     <div className='flex'>
       <ProductLeftPart/>
      <ProductRightPart/>
     </div>
    </Container>
    </div>
  )
}

export default Product
