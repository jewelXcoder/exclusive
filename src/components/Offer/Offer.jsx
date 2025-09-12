import React from 'react'
import Container from '../Layout/Container'
import Countdown from 'react-countdown';
import RenderedTime from './RenderedTime';

const Offer = () => {
  return (
    <div className='pt-[122px] pb-[161px]'>
      <Container>
        <div className='bg-[url(./assets/offer.png)] py-[69px] bg-cover bg-no-repeat bg-center'>
          <div className='ml-[56px]'>
            <p className='font-primary font-semibold text-[#00FF66]'>Categories</p>
            <h3 className='w-[441px] text-white font-secondary font-semibold text-[48px] mt-[32px]'>Enhance Your Music Experience</h3>
            <div className='mt-[45px]'>
              <Countdown date={Date.now() + 108000000}
                renderer={RenderedTime}>
              </Countdown>
            </div>
            <div className='mt-[40px]'>
              <button className='py-4 px-12 bg-[#00FF66] text-white rounded font-primary font-medium'>Buy Now!</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Offer
