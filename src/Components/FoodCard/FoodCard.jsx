import React from 'react';

const FoodCard = ({ foodItem }) => {
    const { name, description, image } = foodItem;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
               <h5 className='text-center '>Image are coming soon!</h5>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Order now</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;