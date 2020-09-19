import React from "react";
import './Checkout.css'
import Subtotal from './Subtotal/Subtotal'
import {useStateValue} from "../../stateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";

function Checkout() {
    const [{basket, user}] = useStateValue();
    return(
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad"/>
                <div>
                    <h2 className="checkout__title">{user? `Hi, ${user.email} your` : 'Your'} shopping Basket</h2>

                    {basket.map((item,i)=>(
                        <CheckoutProduct
                            key={item.id + i}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}

                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>
    );
}

export default Checkout;