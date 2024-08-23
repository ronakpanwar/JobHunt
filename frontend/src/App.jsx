import { useState } from 'react'
import Navbar from './components/shared/Navbar.jsx'
import Home from './components/Home.jsx';
import Signup from './components/auth/Signup.jsx'
import Login from './components/auth/Login.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Jobs from './components/Jobs.jsx';
import Browse from './components/Browse.jsx';
import Profile from './components/Profile.jsx';
import JobDetails from './components/JobDetails.jsx';
import Companies from './components/Admin/Companies.jsx';

const appRoute = createBrowserRouter([
{
  path:'/',
  element:<Home/>
},
{
  path:'/login',
  element:<Login/>
},
{
  path:'/signup',
  element:<Signup/>
},
{
  path:'/jobs',
  element:<Jobs/>
},
{
  path:'/browse',
  element:<Browse/>
},
{
  path:'/profile',
  element:<Profile/>
},
{
  path:'/jobDetails/:id',
  element:<JobDetails/>
},
// for recruiters

{
  path:'/admin/companies',
  element:<Companies/>
}

])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={appRoute}/>
    </>
  )
}

export default App
