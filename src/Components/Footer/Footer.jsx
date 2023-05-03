import React from 'react';
import { Link } from 'react-daisyui';
import { MdFastfood } from 'react-icons/Md';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-amber-400 flex justify-between px-20 py-5' >
            <div className='flex my-auto'>

                <h2 className='text-3xl font-bold text-white pe-4'>FOODIE-RECIPE</h2> < MdFastfood className='w-10 h-10 text-white'></MdFastfood>
            </div>
            <div>
        <Link></Link>
            </div>

            <div>
                <h5 className='text-white pb-2'>Follow us</h5>
                <div className='pb-3'><FaFacebook className='text-white '></FaFacebook></div>
                
              <div className='pb-3'>   <FaTwitter className='text-white'></FaTwitter></div><FaInstagram className='text-white'></FaInstagram>
            </div>
        </div>
    );
};

export default Footer;