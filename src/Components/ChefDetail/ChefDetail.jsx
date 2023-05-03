import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiFillLike } from 'react-icons/Ai';
import { BiStreetView } from 'react-icons/Bi';

const ChefDetail = () => {

    const cardDetail = useLoaderData();
    const { picture, name, years_of_experience, num_recipes, likes, views, description } = cardDetail;
    console.log(cardDetail);
    return (
        <div>
            <div className="card lg:card-side mx-24 bg-slate-100 my-24  shadow-xl">
                <img className='pe-8' src={picture} alt="" />
                <div className="card-body">
                    <h2 className="card-title text-3xl font-extrabold">{name}</h2>
                    <h4 className='text-xl font-semibold '>Description:</h4>
                    <p>{description}</p>

                    <p>Numbers of recipes: {num_recipes}</p>
                    <p>Year of Experience: {years_of_experience}</p>
                    <p>Likes: {likes} </p>
                    <AiFillLike className='w-6 h-6 text-amber-500'></AiFillLike>
                    <p>Views: {views}</p>
                    <BiStreetView className='w-6 h-6 text-amber-500'></BiStreetView>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ChefDetail;