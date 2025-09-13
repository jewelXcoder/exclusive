import React from 'react'
import Container from '../Layout/Container'
import { FaRegCopyright } from "react-icons/fa6";

const CopyRight = () => {
  return (
    <div className='pt-4 pb-6 bg-black  border-t border-[#141414]'>
      <Container>
                <div>
         <div className='flex justify-center items-center'>
           <p className='text-[#3D3D3D]'><FaRegCopyright /></p>
          <p className='font-primary text-[#3D3D3D] ml-[6px] '> Copyright Rimel 2024. All right reserved</p>
         </div>
        </div>
      </Container>
    </div>
  )
}

export default CopyRight
