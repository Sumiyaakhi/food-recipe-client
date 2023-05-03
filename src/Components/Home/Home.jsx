import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            {/* Banner section */}
            <div  className='md:flex justify-between mx-20 my-10'>

            <div className=''>
            <h1 className='text-6xl text-amber-500 font-bold pt-8'>Kevin's Famous <br /> Spicy Salsa <br /> with Mangoes!!!</h1>
            </div>
            <div>
                <img className='rounded' src="https://t3.ftcdn.net/jpg/03/35/51/06/360_F_335510693_HY7mLg3ARdLccKoXk3m66NLDpJRJh51p.jpg" alt="" />
            </div>
            </div>
  {/* Chef card section */}
        </div>
    );
};

export default Home;