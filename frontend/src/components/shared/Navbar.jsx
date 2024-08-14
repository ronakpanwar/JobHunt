import React from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from 'react-router-dom'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LogOut, User2 } from 'lucide-react'
import { useSelector } from 'react-redux'



const Navbar = () => {
   
  // const user = false;
  const {user} = useSelector(store=>store.auth);

  return (
    <>
      <div className='p-2 flex items-center justify-around'>
        <div className='p-2 font-bold text-3xl'>
          <h1 className=''>Job<span className='text-orange-600'>Hunt</span></h1>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center text-xl gap-6 font-bold' >
            <div className='px-2 py-1 '><a href="/">Home</a></div>
            <div className='px-2 py-1'> <a href="/jobs">Jobs</a></div>
            <div className='px-2 py-1'><a href="/browse">Browse</a></div>
          </div>
          <div className='flex items-center text-xl mx-10' >
          {
            !user?(
              <div className=''>
             <Link to='/login' ><Button className="mx-2" variant="outline">Login</Button></Link>
              <Link to="/signup" ><Button className="mx-2 bg-violet-600 hover:bg-violet-700" >SignUp</Button></Link>
              </div>
            ):(
              <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-60 ">
                <div className=''>
                  <div className='flex gap-4 my-1 items-center'>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div className='flex flex-col '>
                      <h1 className=''>Ronak panwar</h1>
                      <p className='text-sm text-muted-foreground'>its Bio </p>
                    </div>
                  </div>
                  <div className='flex flex-col my-1 text-gray-700 '>
                    <div className='flex w-fit gap-1 items-center cursor-pointer'>
                      <User2 />
                      <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                    </div>
                    <div className='flex w-fit gap-1 items-center cursor-pointer'>
                      <LogOut />
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </div>

              </PopoverContent>
            </Popover>
            )
          }
            


          </div>
        </div>
      </div>


    </>
  )
}

export default Navbar
