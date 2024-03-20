import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reviews from '../data/reviews'; // Assuming reviews.js exports an array of reviews

function HomeMainSection() {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const randomReviews = reviews.sort(() => 0.5 - Math.random()).slice(0, 2);
    setSelectedReviews(randomReviews);
  }, []);

  return (
    <main>
        <div className="about-us">
            <h1>About Us</h1>
            <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Laern more about our story and commitment to your statisfaction</p>
            <Link to="/products">
                <button>Shop Now</button>
            </Link>
        </div>
        <div className="customer-reviews">
            <h1>Customer Reviews</h1>
            {selectedReviews.map((review, index) => (
                <div key={index}>
                    <h2>{review.customerName}</h2>
                    <p>{review.reviewContent}</p>
                    <p>{'⭐'.repeat(review.stars)}</p>
                </div>
            ))}
        </div>
    </main>
  );
}

export default HomeMainSection;