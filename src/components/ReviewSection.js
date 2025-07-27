import React, { useEffect, useState } from 'react';
import ClientReview from './ClientReviews';
import ReviewPopup from './ReviewPopup';
import Papa from 'papaparse';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const backendURL = 'http://localhost:5000'; // Your Express backend URL

  const fetchReviews = async () => {
    try {
      const response = await fetch(`/databases/reviews.csv?t=${Date.now()}`);
      const csv = await response.text();

      Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const parsed = results.data
            .filter(row => row.name && row.text && !isNaN(row.rating))
            .map(item => ({
              name: item.name.trim(),
              role: item.role?.trim() || '',
              image: item.image?.trim()
                ? `/uploads/${item.image.trim().split('/').pop()}`
                : 'https://via.placeholder.com/100',
              text: item.text.trim(),
              rating: parseInt(item.rating, 10),
            }))

            .reverse(); // Show latest first

          setReviews(parsed); // Only latest 5 reviews
        },
      });
    } catch (err) {
      console.error('Failed to load reviews:', err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      <ClientReview reviews={reviews} />
      <ReviewPopup onSubmitSuccess={fetchReviews} />
    </div>
  );
};

export default ReviewSection;
