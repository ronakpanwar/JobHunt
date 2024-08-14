import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

const filterData = [
    {
       filterType:"Location",
       array:["Mumbai" ,"Delhi" , "Pune" , "Indore"]
    },
    {
        filterType:"Industry",
        array:["Frontend Developer" ,"Backend Developer" , "Data Science" , "Graphic Designer"]
     },
     {
        filterType:"Salary",
        array:["0-10k" ,"10-25k" , "25-50k" , "50-1L" , "above 1L"]
     },
]

const FilterCard = () => {
  return (
    <div className='p-3 rounded-md w-full bg-white '>
      <h1 className='text-lg font-bold'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
            filterData.map((e , index)=>(
                <div>
                    <h1 className='text-black font-bold text-lg'>{e.filterType}</h1>
                    {
                        e.array.map((item,index)=>(
                            <div className='flex items-center gap-2 ml-2 text-sm     text-gray-700'>
                                <RadioGroupItem value={item}/>
                                <label>{item}</label>
                            </div>
                        ))
                    }
                </div>
            ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
