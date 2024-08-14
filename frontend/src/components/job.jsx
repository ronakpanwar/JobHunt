import React from 'react'
import { Button } from './ui/button'
import { Bookmark, BookMarked, Lasso } from 'lucide-react'

import { Avatar, AvatarImage } from './ui/avatar'
import { useNavigate } from 'react-router-dom'

const job = () => {
 
    const navigate = useNavigate();
    const jobId = 'yughjgwjkf'

    return (
        <div className='p-5 rounded-md shadow-md'>
            <div className='flex justify-between items-center'>
                <p className='text-gray-700 text-sm'>2 days ago</p>
                <Button variant="outline" size="icon" className='rounded-full '><Bookmark /></Button>
            </div>
            <div className='flex gap-4 my-2 items-center'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src='https://cdn.logojoy.com/wp-content/uploads/2018/05/01104813/1268-768x591.png' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-bold'>Company Name</h1>
                    <p className='text-gray-500'    >India</p>
                </div>
            </div>
            <div className='my-2'>
                <h1 className='text-xl font-bold '>Title</h1>
                <p className='text-sm text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi maxime voluptatibus amet quia reiciendis id ab adipisci numquam suscipit atque.</p>
            </div>
            <div class="w-full flex flex-wrap items-center pt-2 gap-2">
                <span class="bg-blue-50 text-blue-600 px-3 py-1 text-sm font-medium rounded-full">12 Positions</span>
                <span class="bg-green-50 text-green-600 px-3 py-1 text-sm font-medium rounded-full">Remote</span>
                <span class="bg-purple-50 text-purple-600 px-3 py-1 text-sm font-medium rounded-full">12 LPA</span>
            </div>
            <div className='flex gap-4 mt-4'>
                <Button onClick={()=> navigate(`/jobDetails/${jobId}`)} variant="outline"  >
                    Details
                </Button>
                <Button className="bg-violet-600">Save for later</Button>
            </div>

        </div>
    )
}

export default job
