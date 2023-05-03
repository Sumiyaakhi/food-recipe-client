import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const ChefCards = () => {
    const [chefCards,setChefCards] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/chefCard')
        .then(res=> res.json())
        .then(data =>setChefCards(data))
        .catch(error=> console.error(error))
    },[])
    return (
        <div>
             <h1 className='text-4xl text-amber-500 text-center pb-8'>Here are some Categories of our chef's!</h1>
            <div className='mx-16 grid grid-cols-3 gap-4 pb-8'>
           
            {
                chefCards.map(chefCard => <ChefCard 
                key={chefCard.id}
                chefCard = {chefCard}
                ></ChefCard>)
            }
        </div>
        </div>
    );
};

export default ChefCards;