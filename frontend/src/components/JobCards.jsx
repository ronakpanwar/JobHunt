import React from 'react'
import { Badge } from './ui/badge'

const JobCards = () => {
    return (
        <div class="flex flex-col    gap-6 p-8 bg-white shadow-md rounded-lg  mx-auto my-12">
            <div class="w-full flex flex-col">
                <h1 class="text-2xl font-bold text-gray-900 mb-2">Company Name</h1>
                <p class="text-base text-gray-600">India</p>
            </div>
            <div class="w-full ">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Job Title</h2>
                <p class="text-sm text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatem deleniti esse.</p>
            </div>
            <div class="w-full flex flex-wrap items-center gap-2">
                <span class="bg-blue-50 text-blue-600 px-3 py-1 text-sm font-medium rounded-full">12 Positions</span>
                <span class="bg-green-50 text-green-600 px-3 py-1 text-sm font-medium rounded-full">Remote</span>
                <span class="bg-purple-50 text-purple-600 px-3 py-1 text-sm font-medium rounded-full">12 LPA</span>
            </div>
        </div>


    )
}

export default JobCards
