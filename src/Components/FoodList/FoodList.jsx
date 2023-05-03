import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';

const FoodList = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/foodItems')
        .then(res => res.json())
        .then(data=>setFoodItems(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div>
           <h1 className='text-4xl text-amber-500 text-center pb-8'>Some our best selling food items are here!!!</h1>
           <div className='md:grid grid-cols-3 gap-4 '>
            {
                foodItems.map(foodItem => <FoodCard 
                key={foodItems.id}
                foodItem = {foodItem}
                ></FoodCard>)
            }
           </div>
        </div>
    );
};

export default FoodList;