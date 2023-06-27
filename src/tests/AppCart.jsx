import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const AppCart = () => {
    const products = [
        {
          id: 1,
          name: 'Product 1',
          productType: 'Type 1',
          price: 10.99,
          image: 'https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920',
        },
        {
          id: 2,
          name: 'Product 2',
          productType: 'Type 2',
          price: 19.99,
          image: 'https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920',
        },
        // Add more sample products as needed
      ];
      const [cartItems, setCartItems] = useState([]);

      const handleAddToCart = (product) => {
        const existingCartItem = cartItems.find(
          (item) => item.product.id === product.id
        );
    
        if (existingCartItem) {
          setCartItems((prevItems) =>
            prevItems.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          );
        } else {
          setCartItems((prevItems) => [
            ...prevItems,
            { product: product, quantity: 1 },
          ]);
        }
      };
    
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-8">Online Store</h1>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Products</h2>
              <ProductList products={products} onAddToCart={handleAddToCart} />
            </div>
            <div className="col-span-2">
              <Cart cartItems={cartItems} />
            </div>
          </div>
        </div>
      );
    
};

export default AppCart;
