import React from "react";
import './Home.css'
import Product from "./Product/Product";

function Home (){
    return(
        <div className="home">
            <div className="home__container">
                <img className='hero__image'
                     src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg" alt="Amazon-banar"/>
            </div>
            <div className="home__row">
                <Product
                    title="PrintOctopus Men's & Women's Regular Fit Shirt"
                    img="https://images-na.ssl-images-amazon.com/images/I/61tX%2BRymprL._UL1200_.jpg"
                    price={6.12}
                    rating={4}
                    id={4206936}
                />
                <Product
                    title='Microsoft Surface Pro 7 VDV-00015 12.3 inch Touchscreen 2-in-1 Laptop (10th Gen Intel Core i5/8GB/128GB SSD/Windows 10 Home/Intel Iris Plus Graphics), Platinum'
                    img="https://images-na.ssl-images-amazon.com/images/I/519JUh2%2BewL._SL1200_.jpg"
                    price={1230.29}
                    rating={4}
                    id={7738608}
                />
            </div>
            <div className="home__row">
                <Product
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor'"
                    img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    price={199.99}
                    rating={3}
                    id={7441226}
                />
                <Product
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    price={98.99}
                    rating={5}
                    id={750279}
                />
                <Product
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    img="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    price={598.99}
                    rating={4}
                    id={841097}
                />
            </div>
            <div className="home__row">
                <Product
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    img="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    price={1094.98}
                    rating={4}
                    id={953723}
                />
            </div>
            <div className="home__row">
                <Product
                    title="Mi TV 4X 163.9 cm (65 Inches) 4K Ultra HD Android LED TV (Black) "
                    img="https://images-na.ssl-images-amazon.com/images/I/71jL1oKiPTL._SL1500_.jpg"
                    price={747.68}
                    rating={4}
                    id={923537}
                />
                <Product
                    title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Certified Android LED TV 65X8000H (Black) (2020 Model)"
                    img="https://images-na.ssl-images-amazon.com/images/I/91UYojFHobL._SL1500_.jpg"
                    price={1614.22}
                    rating={5}
                    id={537923}
                />
                <Product
                    title="Samsung 163 cm (65 inches) 4K Ultra HD Smart LED TV UA65TU8000KXXL (Black) (2020 Model)"
                    img="https://images-na.ssl-images-amazon.com/images/I/917QAUQorDL._SL1500_.jpg"
                    price={1605.51}
                    rating={5}
                    id={7478190}
                />
            </div>
        </div>
    );
}

export default Home;