import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {   //use (props) instade of {cart} for option 01 and 02
    // const cart = props.cart;// Option-01
    // const {cart} =props // Option-02

    let total =0;
let totalShipping = 0;
    for(const product of cart){
        total = total+product.price;
        totalShipping = totalShipping + product.shipping;

    }
    const tax = total*0.07;
const grandTotal = total+totalShipping+tax;
    // console.log(cart) check cart in concole
    return (
        <div className='cart'>
             <h4 >Order Summary</h4>
                <p>Selected Items:{cart.length}</p>
                <p>Total Price:${total}</p>
                <p>Total Shipping:${totalShipping}</p>
                <p>Tax:${tax.toFixed(2)}</p>
                <p>Grand Total:${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;