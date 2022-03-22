import React from 'react';
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart}) => {
    return (
        <div  className="cart-container">
            <h1>Order Summary</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${ }</p>
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
    );
};

export default Cart;