import { Search } from 'lucide-react'
import React from 'react'

const heroSection = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-orange-600 font-medium'>No. 1 Plateform for Job </span>
                <h1 className='text-5xl font-bold' > Search , Apply & <br />
                    Get Your <span className='text-violet-600'>Dream Job</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga maxime perspiciatis odit rerum impedit.</p>
                <div className="flex w-full max-w-md shadow-md border border-gray-200 rounded-full items-center gap-2 px-4 py-2 mx-auto bg-white">
                    <input type="text"
                        placeholder="Find jobs for you..."
                        className="outline-none border-none w-full text-gray-700 placeholder-gray-400"
                    />
                    <button className="rounded-full bg-violet-500 text-white p-2 hover:bg-violet-600 focus:outline-none transition duration-300">
                        <Search className="h-5 w-5" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default heroSection
