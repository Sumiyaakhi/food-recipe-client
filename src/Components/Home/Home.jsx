import React from 'react';
import './Home.css'
import ChefCards from '../ChefCards/ChefCards';
import FoodList from '../FoodList/FoodList';

const Home = () => {
    return (
        <div>
            {/* Banner section */}
            <div className='md:flex justify-between mx-20 my-10'>

                <div className=''>
                    <h1 className='text-6xl text-amber-500 font-bold pt-8'>Kevin's Famous <br /> Spicy Salsa <br /> with Mangoes!!!</h1>
                </div>
                <div>
                    <img className='rounded' src="https://t3.ftcdn.net/jpg/03/35/51/06/360_F_335510693_HY7mLg3ARdLccKoXk3m66NLDpJRJh51p.jpg" alt="" />
                </div>
            </div>
            {/* Chef card section */}
            <div>
                <ChefCards></ChefCards>
            </div>
            {/* Food Recipe section */}
            <FoodList></FoodList>
            {/* another section */}
            <div className="rating gap-1 flex justify-center  my-10">
                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
            </div>
           <div className='flex justify-center mb-5'>
           <div className="btn-group ">
                <button className="btn">«</button>
                <button className="btn">Page 22</button>
                <button className="btn">»</button>
            </div>
           </div>
        </div>
    );
};

export default Home;