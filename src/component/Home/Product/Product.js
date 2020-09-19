import React from "react";
import './Product.css'
import {useStateValue} from "../../../stateProvider";

function Product({id ,title, img, rating, price}) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: img,
                rating: rating,
                price: price
            }
        });
    };
    return(
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p><small>₹</small><strong>{price}</strong></p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}><span>⭐</span></p>
                    ))}
                </div>
            </div>
            <img src={img} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;