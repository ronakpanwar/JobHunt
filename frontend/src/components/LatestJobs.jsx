import React from 'react'
import JobCards from './JobCards';
import { useSelector } from 'react-redux';

// const items = [1, 2 ,3 ,4, 5, 6,7,8];

const LatestJobs = () => {
  
  const {allJobs} = useSelector(store=>store.job);

  return (
    <div className='text-center mx-auto my-20'>
      <h1 className='text-4xl font-bold'>Top Jobs <span className='text-orange-600'>Openings</span></h1>
      <div className='grid grid-cols-3 gap-3'>
       {
        allJobs.length <= 0 ? <span>No Job Available</span>:
        allJobs.slice(0,6).map((job)=>(
            <JobCards key={job._id} job={job}/>
        ))
       } 
      </div>

    </div>
  )
}

export default LatestJobs
