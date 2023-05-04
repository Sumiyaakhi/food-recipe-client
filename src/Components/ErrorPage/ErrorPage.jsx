import React from 'react';
import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            
          <div className='flex justify-center py-3'>
          <Link to='/'>  <Button className='bg-blue-700 border-0 px-20 '> Go to HomePage</Button></Link>
          </div>
            <img className='w-screen' src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-13617.jpg" alt="" />

           
        </div>
    );
};

export default ErrorPage;