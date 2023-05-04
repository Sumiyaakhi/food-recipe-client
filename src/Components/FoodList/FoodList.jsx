import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import { ClapSpinner } from 'react-spinners-kit';

const FoodList = () => {
    const [foodItems, setFoodItems] = useState([]);
const [isLoading,setIsLoading] =useState(true);
    useEffect(()=>{
        setIsLoading(true);
        fetch('http://localhost:5000/foodItems')
        .then(res => res.json())
        .then(data=>setFoodItems(data))
        .catch(error=>console.error(error))
        setIsLoading(false);
    },[])
    return (
        <div>
           
        
              <h1 className='text-4xl text-amber-500 text-center pb-8'>Some our best selling food items are here!!!</h1>

              {isLoading ? (
                    <div className="flex items-center justify-center">
                       
                       <ClapSpinner className="w-10 h-10"></ClapSpinner>
                    </div>
                ) : (
           <div className='md:grid grid-cols-3 gap-4 '>
            {
                foodItems.map(foodItem => <FoodCard 
                key={foodItem.id}
                foodItem = {foodItem}
                ></FoodCard>)
            }
           </div>
        
                )}
        </div>
    );
};

export default FoodList;