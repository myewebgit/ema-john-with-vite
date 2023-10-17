import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    const handleAddToCart = (product)=>{
    //   console.log(product) //Testing in console.
    const newCart = [...cart, product];
    setCart(newCart);
           }

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        // .then(data => console.log(data))  // to check in console
        .then(data => setProducts(data)) // loading data in UI
    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
            {/* <h2>Welcome to my Shop: {products.length}</h2> */}
            {
                products.map(product => <Products
                key={product.id}
                product={product}
                handleAddToCart ={handleAddToCart}
                ></Products>)
            }
            
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items:{cart.length}</p>
            </div>
           
        </div>
    );
};

export default Shop;