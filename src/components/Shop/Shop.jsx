import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    const handleAddToCart = (product) => {
        //   console.log(product) //Testing in console.

        // Initally used 
        // const newCart = [...cart, product];

        let newCart = [];

        // if product doesn't exist set quantity = 1, if any update by 1
        const exists = cart.find(pd => pd.id === product.id)
        if (!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists]
        }
        setCart(newCart);
        addToDb(product.id)
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            // .then(data => console.log(data))  // to check in console
            .then(data => setProducts(data)) // loading data in UI
    }, []);

    useEffect( ()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step 1: get id
        for (const id in storedCart){
            //step2 get the product by using id
            const addedProduct = products.find(product => product.id === id)
          if (addedProduct){
               //step 3: get quantity of the product
               const quantity = storedCart[id];
               addedProduct.quantity = quantity;

               //step 4: add the added product to the saved cart
               savedCart.push(addedProduct)
          }
         
            console.log(addedProduct)
        }
        // step 5: set the cart
        setCart(savedCart)
    },[products])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {/* <h2>Welcome to my Shop: {products.length}</h2> */}
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }

            </div>
            <div className="cart-container">
                {/* <h4>Order Summary</h4>
                <p>Selected Items:{cart.length}</p>  //first time operation check // */}
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;