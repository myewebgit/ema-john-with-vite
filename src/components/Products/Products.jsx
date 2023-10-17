import React from 'react';
import './Products.css'

const Products = (props) => {
    // console.log(props.product)// testing in console
   const {img, name, seller,ratings, quantity, price} = props.product
   
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
           </div>
           <button className='btn-cart'> Add to cart</button>
        </div>
    );
};

export default Products;