import React, { useState } from 'react';

function ProductItem({product, addToCart})
{
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className="product-item">
            <img className='product-img' src={product.image} alt={product.name} />
            <div 
            onMouseEnter={() => setShowDescription(true)} 
            onMouseLeave={() => setShowDescription(false)}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
            {showDescription && <p>{product.description}</p>}
        </div>
    );
}

export default ProductItem;
// Path: src/components/Productpage.js