import React from 'react'
import JobCards from './JobCards';

const items = [1, 2 ,3 ,4, 5, 6,7,8];

const LatestJobs = () => {
  return (
    <div className='text-center mx-auto my-20'>
      <h1 className='text-4xl font-bold'>Top Jobs <span className='text-orange-600'>Openings</span></h1>
      <div className='grid grid-cols-3 gap-3'>
       {
        items.slice(0,6).map((e,index)=>(
            <JobCards/>
        ))
       } 
      </div>

    </div>
  )
}

export default LatestJobs
