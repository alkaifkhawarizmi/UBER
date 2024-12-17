import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1655844772789-6c8d7921fdd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHRyYWZmaWMlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className='w-32 ml-4' src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8zMFwvYXNzZXRzXC85YlwvNTY1MVwvNDIyYjg2M2Q0MzM4N2ViY2ZmNTY3YzA3Mjg2YTUzODctMTYyMDcyMDE1OS5wbmcifQ:postmates:ir-b-5p1SGaVUd55NTLXM6NSXc6vdTy9tnblu39wr_8?width={width}" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
          <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-xl text-white py-3 mt-5 rounded'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home