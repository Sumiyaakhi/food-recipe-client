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
            <h1>Here are some Categories of our chef's!</h1>
            {
                chefCards.map(chefCard => <ChefCard 
                key={chefCard.id}
                chefCard = {chefCard}
                ></ChefCard>)
            }
        </div>
    );
};

export default ChefCards;