import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import Cart from './Cart';

const ProductPage = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevCartItems) => {
            const cartItems = prevCartItems.find((cartItems) => cartItems.id === product.id);
            if (cartItems) {
                return prevCartItems.map((cartItems) =>
                cartItems.id === product.id ? { ...cartItems, quantity: cartItems.quantity + 1 } : cartItems
                );
            }
            return [...prevCartItems, { ...product, quantity: 1 }];
        });
    }

    const removeFromCart = (productId) => {
        setCartItems((prevCartItems) => {
            const cartItems = prevCartItems.find((cartItems) => cartItems.id === productId);
            if (cartItems.quantity === 1) {
                return prevCartItems.filter((cartItems) => cartItems.id !== productId);
            }
            return prevCartItems.map((cartItems) =>
            cartItems.id === productId ? { ...cartItems, quantity: cartItems.quantity - 1 } : cartItems
            );
        });
    }

    useEffect(() => {
        const loadCartItems = localStorage.getItem('cart');
        if (loadCartItems) {
            setCartItems(JSON.parse(loadCartItems));
        }
    }
    , []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    , [cartItems]);
    return (
        <div>
        <Header />
        <table className='Product-cart'>
            <tr>
                <td className='ProductList-td'><ProductList addToCart={addToCart}/></td>
                <td className='cartItems-td' style={{verticalAlign:"top"}}> <Cart cartItems={cartItems} removeFromCart={removeFromCart}/> </td>
            </tr>
        </table>
        <Footer />
        </div>
    );
}

export default ProductPage;