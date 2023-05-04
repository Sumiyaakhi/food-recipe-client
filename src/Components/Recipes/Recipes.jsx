import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { ClapSpinner } from 'react-spinners-kit';

const Recipes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:5000/recipe")
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.error(error))
            setIsLoading(false);
    }, [])
    return (
       <div>
         {isLoading ? (
                    <div className="flex items-center justify-center">
                       
                       <ClapSpinner className="w-10 h-10"></ClapSpinner>
                    </div>
                ) : (
         <div className='md:grid grid-cols-2 gap-10 mb-8 mx-10'>
            {
recipes.map(recipe =>
    <Recipe 
    key={recipe.id}
    recipe={recipe}
    ></Recipe>
    )
            }
        </div>
                )}
       </div>
    );
};

export default Recipes;