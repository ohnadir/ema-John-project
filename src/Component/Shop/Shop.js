import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data =>  setProducts(data));
    }, [])
    useEffect(() =>{
        const storedCart = getStoredCart()
        const savedCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])
    const handleAddToCart = (selectedProduct) => {
        let newCart = []; 
        const exits = cart.find(product => product.id === selectedProduct.id);
        if (!exits) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct);
            exits.quantity = exits.quantity + 1;
            newCart = [...rest, exits];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
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
            <div className='cart'>
                <Cart cart={cart}></Cart>
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