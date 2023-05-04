import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import {  ClapSpinner } from 'react-spinners-kit';



const ChefCards = () => {
    const [chefCards, setChefCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://foodie-recepie-server-sumiyaakhi.vercel.app/chefCard')
            .then(res => res.json())
            .then(data => setChefCards(data))
            .catch(error => console.error(error))
        setIsLoading(false);
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-amber-500 text-center pb-8'>Here are some Categories of our chef's!</h1>
            <div className="flex flex-col items-center justify-center min-h-screen">
                {isLoading ? (
                    <div className="flex items-center justify-center">
                       
                       <ClapSpinner className="w-10 h-10"></ClapSpinner>
                    </div>
                ) : (
                    

                        <div className='mx-16 md:grid grid-cols-3 gap-4 pb-8'>

                            {
                                chefCards.map(chefCard => <ChefCard
                                    key={chefCard.id}
                                    chefCard={chefCard}
                                ></ChefCard>)
                            }
                        </div>

                
                )}
            </div>

        </div>
    );
};

export default ChefCards;