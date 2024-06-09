import React, { useContext } from 'react'
import '../asset/css/navbar.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
const Navbar = () => {
  const {user} = useContext(UserContext)
  return (
    <div className='navbar'>
      <div className="navbar-left">
    <Link to ='/' className='navbar-brand'>
      Contact As
      </Link>
      </div>
      <div className="navbar-right">
<Link to='/about' className='navbar-link'>About</Link>
{
  user ?<>
  <Link to='/login' className='navbar-link'>Logout</Link>
   <div>{user.email}</div>
  </> :
  <>
  <Link to='/login' className='navbar-link'>Login</Link>
<Link to='/register' className='navbar-link'>Regiter</Link>
</>
}

      </div>
    </div>
  )
}

export default Navbar
