import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/recipe")
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='grid grid-cols-2 gap-10 mb-8'>
            {
recipes.map(recipe =>
    <Recipe 
    key={recipe.id}
    recipe={recipe}
    ></Recipe>
    )
            }
        </div>
    );
};

export default Recipes;