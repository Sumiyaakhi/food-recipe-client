import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import toast, { Toaster } from 'react-hot-toast';


const Recipe = ({ recipe }) => {
    // const [toast, setToast] = useState(false);
    const { name, ingredients, method, rating } = recipe;

    const [btnDisable, setBtnDisable] = useState(false);
    const handleToaster = () => {
        toast.success('Add in your favourite list!');
        setBtnDisable(true);
    }
    return (
        <div>
            <div className="card w-96 bg-amber-500 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Ingredients : {ingredients}</p>
                    <br />
                    <p>Method of cooking: <br /> {method}</p>
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                        <span> {rating}</span>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={handleToaster} disabled={btnDisable} className="btn bg-white text-amber-500 border-0">Favourite</button>
                        <Toaster/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;