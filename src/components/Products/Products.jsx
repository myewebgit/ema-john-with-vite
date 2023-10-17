import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
    // console.log(props.product)// testing in console
   const {img, name, seller,ratings, quantity, price} = props.product;
   const handleAddToCart = props.handleAddToCart;
   
//    const handleAddToCart = ()=>{
//     console.log('added')
//    }
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
           </div>
           <button onClick={()=> handleAddToCart(props.product)} className='btn-cart'> Add to cart 
           <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Products;