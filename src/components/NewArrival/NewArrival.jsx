import React from 'react'
import Container from '../Layout/Container'
import arrival1 from '../../assets/arrival1.png'
import arrival2 from '../../assets/arrival2.png'
import arrival3 from '../../assets/arrival3.png'
import arrival4 from '../../assets/arrival4.png'
import SectionHead from '../HeadingSection/SectionHead'
import SectionSubHead from '../HeadingSection/SectionSubHead'

const NewArrival = () => {
  return (
    <div className='pt-[42px] pb-[182px]'>
      <Container>
        <div>
          <SectionHead>
            Featured
          </SectionHead>
          <SectionSubHead>
            New Arrival
          </SectionSubHead>
          <div className='mt-[60px] flex'>
            <div className='w-1/2'>
              <img src={arrival1} alt="" />
            </div>
            <div className='w-1/2 flex ml-[30px] flex-col'>
              <div className='h-1/2'>
                <img src={arrival2} alt="" />
              </div>
              <div className='h-1/2 mt-[32px] flex'>
                <div className='w-1/2'>
                  <img src={arrival3} alt="" /></div>
                <div className='w-1/2 ml-[30px]'>
                  <img src={arrival4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NewArrival

