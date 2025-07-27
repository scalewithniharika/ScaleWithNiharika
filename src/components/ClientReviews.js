// src/components/ClientReviews.js

import React from 'react';
import './ClientReviews.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import person from '../assets/person-circle.svg';

function ClientReview({ reviews }) {
  if (!reviews || reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <section className="text-center my-5 py-5 review-section" id="reviews">
      <h1 className="fw-bold mb-3 section-heading">Client Reviews</h1>
      <p className="text-secondary mb-5 px-5 pt-3 review-subtext">
        What my clients say about my working.
      </p>
      <div className="container px-5">
        <Swiper
          autoHeight={false}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="review-card d-flex flex-column bg-white rounded-4">
                <div className="review-content flex-grow-1 overflow-auto p-3">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={(() => {
                        console.log('Image src:', review.image);
                        return review.image;
                      })()}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = person;
                      }}
                      alt={review.name}
                      className="rounded-circle me-3"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold reviewer-name pb-1">{review.name}</h6>
                      <small className="text-muted reviewer-role">{review.role}</small>
                    </div>
                  </div>
                  <p className="text-secondary fst-italic review-text">"{review.text}"</p>
                </div>
                <div className="text-warning star-rating p-3 border-top">
                  {[...Array(Number(review.rating) || 0)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ClientReview;
