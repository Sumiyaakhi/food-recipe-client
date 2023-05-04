import React from 'react';
import { Link } from 'react-router-dom';


const ChefCard = ({chefCard}) => {

    const {id, picture, name, years_of_experience,num_recipes,likes,views} = chefCard;
//    console.log(chefCard);

    return (
        <div >
             
            <div className="card w-96 bg-base-100 shadow-xl">
                <img className='rounded' src={picture} />
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p>Experience: {years_of_experience} years</p>
                    <p>Numbers of recipes: {num_recipes}</p>
                    <p>Likes: {likes}</p> 
                    <p>views: {views} </p>
                    
                    <div className="card-actions">
                       <Link to={`/chefCard/${id}`}> <button className="btn bg-amber-500 border-0 ">View recipes</button></Link>
                    </div>
                </div>
            </div>
                
        </div>
    );
};

export default ChefCard;