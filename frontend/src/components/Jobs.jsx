import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './job'
import { space } from 'postcss/lib/list';


const randomArray = [1,2,3,4,5,6,7];

const Jobs = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mt-5 mx-20'>
        <div className='flex gap-5'>
            <div className='w-[20%] '>
                <FilterCard/>
            </div>
            {
             randomArray.length <= 0 ? <span>No Jobs Found..</span>:
             <div className='flex-1 h-[80vh] overflow-y-auto pb-5 '>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        randomArray.map((e, index)=>(
                            <div>
                                <Job/>
                            </div>
                        ))
                    }
                </div>
             </div>
            }

        </div>

      </div>
    </div>
  )
}

export default Jobs
