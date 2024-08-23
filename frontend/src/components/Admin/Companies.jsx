import React from 'react'
import Navbar from '../shared/Navbar'

const Companies = () => {
  return (
    <div>
    <Navbar/>      
      <div className='max-w-6xl m-auto'>
        <div>
          <input type="text" placeholder='Enter your company name' />
        </div>
      </div>
    </div>
  )
}

export default Companies
