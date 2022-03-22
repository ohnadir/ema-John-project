import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data =>  setProducts(data));
    }, [])
    /* const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }  */
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        const price = parseInt(product.price);
        console.log(product)
        setPrice(price + parseInt (product.price))
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                <div className="products">
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${price }</p>
                <p>Total Shipping Charge: ${ }</p>
                <p>Tax: ${ }</p>
                <p>Grand Total: ${ }</p>
                <button className='btn-clear'>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </button>
                <button className='btn-review'>
                    <p>Review Order</p>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>

            </div>
        </div>
    );
};

export default Shop;





/* import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart]=useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                <div className="products">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }
                </div>
            </div> 
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop; */