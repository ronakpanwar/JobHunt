import React from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link, useNavigate } from 'react-router-dom'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LogOut, User2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { setUser } from '@/redux/authSlice'



const Navbar = () => {

  // const user = false;
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/user/logout', {
        withCredentials: true
      })
      if (res.data.success) {
        toast.success(res.data.message)
        dispatch(setUser(null));
        navigate('/');
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }

  return (
    <>
      <div className='p-2 flex items-center justify-around'>
        <div className='p-2 font-bold text-3xl'>
          <h1 className=''>Job<span className='text-orange-600'>Hunt</span></h1>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center text-xl gap-6 font-bold' >
            {
              user && user.role === 'recruiter' ? (
                <>
                  <div className='px-2 py-1 '><a href="/admin/companies">Companies</a></div>
                  <div className='px-2 py-1'> <a href="/jobs">Jobs</a></div>
                </>
              ) : (
                <>
                  <div className='px-2 py-1 '><a href="/">Home</a></div>
                  <div className='px-2 py-1'> <a href="/jobs">Jobs</a></div>
                  <div className='px-2 py-1'><a href="/browse">Browse</a></div>
                </>
              )
            }

          </div>
          <div className='flex items-center text-xl mx-10' >
            {
              !user ? (
                <div className=''>
                  <Link to='/login' ><Button className="mx-2" variant="outline">Login</Button></Link>
                  <Link to="/signup" ><Button className="mx-2 bg-violet-600 hover:bg-violet-700" >SignUp</Button></Link>
                </div>
              ) : (
                <Popover>
                  <PopoverTrigger>
                    <Avatar>
                      <AvatarImage src={user?.profile?.profileImg} />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-60 ">
                    <div className=''>
                      <div className='flex gap-4 my-1 items-center'>
                        <Avatar>
                          <AvatarImage src={user?.profile?.profileImg} />
                        </Avatar>
                        <div className='flex flex-col '>
                          <h1 className=''>{user?.fullname}</h1>
                          <p className='text-sm text-muted-foreground'>{user?.profile?.bio} </p>
                        </div>
                      </div>
                      <div className='flex flex-col my-1 text-gray-700 '>
                      {
                        user && user.role==='student'&& ( <div className='flex w-fit gap-1 items-center cursor-pointer'>
                          <User2 />
                          <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                        </div>)
                      }
                       
                        <div className='flex w-fit gap-1 items-center cursor-pointer'>
                          <LogOut />
                          <Button variant="link" onClick={handleLogOut}>Logout</Button>
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