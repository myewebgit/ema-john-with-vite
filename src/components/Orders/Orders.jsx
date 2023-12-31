import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();// cart named as savedCart to use state
    const [cart, setCart] = useState(savedCart);

    const handleRemoveCart = (id) =>{
        // console.log(id)
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart()
    }

    // console.log(products)
    return (
        <div className='shop-container'>
            <div className="review-container">
            {/* { for firdt time check */}
            {/* /* <h2>Order page: {products.length}</h2> */}  

            {/* to show each product in revew page */}
            {
               cart.map(product => <ReviewItem
                key={product.id}
                product={product}
                handleRemoveCart = {handleRemoveCart}
                ></ReviewItem>)
            }
            </div>
            <div className='cart-container'>
                <Cart
                 cart={cart}
                 handleClearCart={handleClearCart}
                 >
                    <Link className='btn-link' to='/checkout'>
                        <button className='btn-proced'>Proceed Checkout</button>
                    </Link>
                 </Cart>
            </div>
        </div>
    );
};

export default Orders;