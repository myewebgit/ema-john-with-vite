import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, handleClearCart, children }) => {   //use (props) instade of {cart} for option 01 and 02
    // const cart = props.cart;// Option-01
    // const {cart} =props // Option-02

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
            // option- 2
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // } 
        // option- 1
        // product.quantity = product.quantity || 1;
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 0.07;
    const grandTotal = total + totalShipping + tax;
    // console.log(cart) check cart in concole
    return (
        <div className='cart'>
            <h4 >Order Summary</h4>
            <p>Selected Items:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <p>Grand Total:${grandTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} className='btn-clear'> 
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
            {children}
        </div>
    );
};

export default Cart;