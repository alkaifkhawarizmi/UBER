import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

function LocationSearchPanel(props) {

  const locations = [
    "24B, Near Kapoor's cafe , Sheriyans Coding School , Bhopal",
    "24B, Near Kapoor's cafe , khajrana , indore",
    "24B, Near Kapoor's cafe , railway station , nagda",
    "24B, Near Kapoor's cafe , railway station , nagda"
  ]

  function handleClick(){
    props.setvehiclePanel(true)
    props.setpanel(false)
  }

  return (
    <div>
      {
        locations.map((loc , i) => (
          <div key={i} onClick={() => handleClick()} className={`flex ${props.vehiclePanel ? "hidden" : "block"} border-2 active:border-black p-3 rounded-xl items-center my-4 justify-start gap-6`}>
        <h2 className='p-2 bg-[#eeee] rounded-full text-2xl '><IoLocationSharp /></h2>
        <h4 className='text-xl font-medium text-gray-700'>{loc}</h4>
      </div>
        ))
      }
    </div>
  )
}

export default LocationSearchPanel