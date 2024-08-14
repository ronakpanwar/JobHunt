import React from 'react'
import { Button } from './ui/button'

const JobDetails = () => {

    const isApplied = false;

  return (
    <div className='max-w-7xl  mx-20 my-10 '>
      <div className='flex justify-between items-center'>
        <div className=''>
            <h1 className='font-bold text-xl '>Frontend Developer</h1>
            <div class="w-full flex flex-wrap items-center pt-2 gap-2">
                <span class="bg-blue-50 text-blue-600 px-3 py-1 text-sm font-medium rounded-full">12 Positions</span>
                <span class="bg-green-50 text-green-600 px-3 py-1 text-sm font-medium rounded-full">Remote</span>
                <span class="bg-purple-50 text-purple-600 px-3 py-1 text-sm font-medium rounded-full">12 LPA</span>
            </div>
        </div>
        <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 curser-not-allowed' : 'bg-violet-600 hover:bg-violet-700'}`}>{isApplied? 'Alredy applied' : 'Apply Now'}</Button>
      </div>
      <h1 className='mt-2 font-bold text-xl border-b-2 border-b-gray-400 py-2'>Job Description</h1>
      <div>
        <h1 className='font-bold text-lg my-1'>Role : <span className='font-normal pl-4 text-gray-700'>Frontend Developer</span></h1>
        <h1 className='font-bold text-lg my-1'>Location : <span className='font-normal pl-4 text-gray-700'>Delhi</span></h1>
        <h1 className='font-bold text-lg my-1'>Description : <span className='font-normal pl-4 text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing.</span></h1>
        <h1 className='font-bold text-lg my-1'>Experience : <span className='font-normal pl-4 text-gray-700'>6 month</span></h1>
        <h1 className='font-bold text-lg my-1'>Salary : <span className='font-normal pl-4 text-gray-700'>6 LPA </span></h1>
        <h1 className='font-bold text-lg my-1'>Total Applicants : <span className='font-normal pl-4 text-gray-700'>4</span></h1>
        <h1 className='font-bold text-lg my-1'>Posted Date : <span className='font-normal pl-4 text-gray-700'>13-08-24</span></h1>
      </div>
    </div>
  )
}

export default JobDetails

