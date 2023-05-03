import React from 'react';
import { Button, Link } from 'react-daisyui';
import { MdFastfood } from 'react-icons/Md';


const Header = () => {
  return (
    <div className='mx-12 mt-5'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <h2 className='text-3xl font-bold text-amber-500 pe-4'>FOODIE-RECIPE</h2> < MdFastfood className='w-10 h-10 text-amber-500'></MdFastfood>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li> <Link className='no-underline text-orange-500' to='/'>Home</Link></li>
            <li> <Link  className='no-underline text-orange-500' to='blog'>Blog</Link></li>
            
          </ul>
        </div>
        <div className="navbar-end">          {
                                // user && pic
                            }

                            {/* {user ? */}
                                <Button className='bg-amber-500 border-0' >Logout</Button> :
                                <Link to="/login">
                                    <Button className=' bg-amber-500 border-0'>Login</Button>
                                </Link>
                            {/* } */}
        </div>
      </div>
    </div>
  );
};

export default Header;