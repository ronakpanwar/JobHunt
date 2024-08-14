import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact2, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import ApplidJobsTable from './ApplidJobsTable'

const Profile = () => {

    const skills = ['Html', 'Css', 'JavaScript', 'React'];
    const isResume = true;

    return (
    <div>
    <Navbar />
    <div className="flex flex-col items-center px-4">
        <div className="w-full max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-xl">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <Avatar className="h-28 w-28 rounded-full shadow-md">
                        <AvatarImage src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01104813/1268-768x591.png" />
                    </Avatar>
                    <div>
                        <h1 className="font-semibold text-2xl text-gray-800">Full Name</h1>
                        <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In optio assumenda voluptate?
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Button className="rounded-full border border-gray-300 hover:bg-gray-100 focus:outline-none" variant="outline" size="icon">
                        <Pen className="w-5 h-5 text-gray-600" />
                    </Button>
                </div>
            </div>

            <div className="mx-4">
                <div className="flex gap-4 items-center mx-4 my-4 text-gray-700">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <p>example@gmail.com</p>
                </div>
                <div className="flex gap-4 items-center mx-4 my-4 text-gray-700">
                    <Contact2 className="w-5 h-5 text-blue-500" />
                    <p>6263715063</p>
                </div>
            </div>

            <div className="m-4 py-4 border-t border-gray-200">
                <h1 className="font-bold text-xl text-gray-800 mb-4">Skills</h1>
                <div className="flex flex-wrap gap-3">
                    {skills.length !== 0 ? (
                        skills.map((skill, index) => (
                            <Badge key={index} className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                                {skill}
                            </Badge>
                        ))
                    ) : (
                        <span className="text-gray-500">NA</span>
                    )}
                </div>
            </div>

            <div className="m-4 py-4 border-t border-gray-200">
                <label className="text-lg font-bold text-gray-800 mb-2">Resume</label>
                {isResume ? (
                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">
                        My Resume
                    </a>
                ) : (
                    <span className="text-gray-500">NA</span>
                )}
            </div>
        </div>

        <div className="w-full max-w-4xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg">
            <h1 className="font-bold text-xl text-gray-800 mb-4">Applied Jobs</h1>
            <ApplidJobsTable />
        </div>
    </div>
</div>
)
}

export default Profile
