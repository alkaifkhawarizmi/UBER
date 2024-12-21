import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdCash } from 'react-icons/io'
import { RiUserLocationFill } from 'react-icons/ri'
import { Typewriter } from "react-simple-typewriter";

function LookingForDriver() {
  return (
    <div> 
        <h1 className='text-3xl text-center font-semibold'>Looking for Captains  <Typewriter
            words={["....."]}
            loop={0} // Set loop={false} for a single loop
            cursor
            cursorStyle=""
            typeSpeed={200}
            deleteSpeed={200}
            delaySpeed={1000}
          /></h1>
        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1670427549/assets/c4/c2552a-2317-4b9e-becf-ed7b96459edd/original/UberBlack-1.jpg" alt="" />
        <div className='flex mt-2 items-center gap-6 border-gray-400 border-b-2 pb-4'>
          <h1 className='text-3xl'>
            <RiUserLocationFill />
          </h1>
        
        <div className='text-2xl font-semibold'>
          <h3>562/11 -A</h3>
          <p className='text-gray-600 text-xl'>Khajrana Dargah , Indore</p>
          </div>
        </div>
        <div className='flex  mt-2 pt-2 items-center gap-6 border-b-2 border-gray-400 pb-4'>
          <h1 className='text-3xl'>
          <FaLocationDot />
          </h1>
        
        <div className='text-2xl font-semibold'>
          <h3>562/11 -A</h3>
          <p className='text-gray-600 text-xl'>Khajrana Dargah , Indore</p>
          </div>
        </div>
        <div className='flex  mt-2 pt-2 items-center gap-6 pb-4'>
          <h1 className='text-3xl'>
          <IoMdCash />
          </h1>
        
        <div className='text-2xl font-semibold'>
          <h3>₹ 150/-</h3>
          <p className='text-gray-600 text-xl'>Payment mode , Cash</p>
          </div>
        </div>
      </div>
  )
}

export default LookingForDriver