import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    const { handleAddToCart } = props;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} star</p>
            </div>
            <button className='btn-cart' onClick={handleAddToCart}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;


/* import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ handleAddToCart, product }) => {
    const { name, img, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Manufacture : {seller}</p>
                <p>Rating : {ratings} star</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-p'>Add to  Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product; */