import React, { useContext } from 'react';
import { MdFastfood } from 'react-icons/Md';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Button } from 'react-daisyui';


const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  return (
    <div className='mx-12 mt-5'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <ul className="p-2">
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='blog'>Blog</ActiveLink>
                <ActiveLink to='aboutUs'>About-us</ActiveLink>
              </ul>

            </ul>
          </div>
          <h2 className='text-3xl font-bold text-amber-500 pe-4'>FOODIE-RECIPE</h2> < MdFastfood className='w-10 h-10 text-amber-500'></MdFastfood>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='blog'>Blog</ActiveLink>
            <ActiveLink to='about us'>About-us</ActiveLink>

          </ul>
        </div>
        <div className="navbar-end">          {
          // user && pic
        }
          {/* <Link className="bg-amber-500 text-white px-3 py-2 rounded text-xl me-4" to="/login">Login</Link>
          <Link className="bg-amber-500 text-white px-3 py-2 rounded text-xl" to="/register">Register</Link> */}

          {/* {user ? */}
          {/* <Button className='bg-amber-500 border-0' >Logout</Button> :
                                <Link to="/login">
                                    <Button className=' bg-amber-500 border-0'>Login</Button>
                                </Link> */}
          {/* } */}
          {
          user ? <>
          <span>{user.email}</span>
          <Button onClick={handleLogOut} className='bg-amber-500 border-0' >Logout</Button>
          </>:  <Link to="/login">
                                    <Button className=' bg-amber-500 border-0'>Login</Button>
                                </Link> 
          }
        </div>
      </div>
    </div>
  );
};

export default Header;