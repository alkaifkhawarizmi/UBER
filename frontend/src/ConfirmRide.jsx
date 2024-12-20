import React from 'react'
import { RiUserLocationFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCash } from "react-icons/io";

function ConfirmRide() {
  return (
    <div>
      <div>
        <h1 className='text-3xl font-semibold'>Confirm Your Ride</h1>
        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1670427549/assets/c4/c2552a-2317-4b9e-becf-ed7b96459edd/original/UberBlack-1.jpg" alt="" />
        <div className='flex mt-2 items-center gap-6 rounded-xl shadow-xl pb-4'>
          <h1 className='text-3xl'>
            <RiUserLocationFill />
          </h1>
        
        <div className='text-2xl font-semibold'>
          <h3>562/11 -A</h3>
          <p className='text-gray-600 text-xl'>Khajrana Dargah , Indore</p>
          </div>
        </div>
        <div className='flex  mt-2 pt-2 items-center gap-6 rounded-xl shadow-xl pb-4'>
          <h1 className='text-3xl'>
          <FaLocationDot />
          </h1>
        
        <div className='text-2xl font-semibold'>
          <h3>562/11 -A</h3>
          <p className='text-gray-600 text-xl'>Khajrana Dargah , Indore</p>
          </div>
        </div>
        <div className='flex  mt-2 pt-2 items-center gap-6 rounded-xl shadow-xl pb-4'>
          <h1 className='text-3xl'>
          <IoMdCash />
          </h1>
        
        <div className='text-2xl font-semibold'>
          <h3>₹ 150/-</h3>
          <p className='text-gray-600 text-xl'>Payment mode , Cash</p>
          </div>
        </div>
        <button className='w-full bg-green-600 py-3 mt-4 text-xl font-bold text-white rounded-xl'>Confirm</button>
      </div>
    </div>
  )
}

export default ConfirmRide