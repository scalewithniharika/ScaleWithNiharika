// src/components/ReviewPopup.js

import React, { useState } from 'react';
import './ReviewPopup.css';

const AddReviewPopup = ({ onSubmitSuccess }) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: '',
    role: '',
    imageFile: null,
    text: '',
    rating: 5,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('role', form.role);
    formData.append('image', form.imageFile); // image file
    formData.append('text', form.text);
    formData.append('rating', form.rating);

    try {
      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert('Review submitted!');
        setForm({ name: '', role: '', imageFile: null, text: '', rating: 5 });
        setShow(false);
        onSubmitSuccess?.(); // refresh parent
      } else {
        alert('Failed: ' + result.message);
      }
    } catch (err) {
      alert('Error submitting review.');
    }
  };

  return (
    <>
      <button className="floating-btn" onClick={() => setShow(true)}>
        + Add Review
      </button>

      {show && (
        <div className="popup-overlay" onClick={() => setShow(false)}>
          <div className="popup-form" onClick={(e) => e.stopPropagation()}>
            <h5 className="mb-3">Submit Your Review</h5>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Role"
                required
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setForm({ ...form, imageFile: e.target.files[0] })}
              />
              <textarea
                placeholder="Your review"
                required
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
              ></textarea>
              <select
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) })}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n} Stars</option>
                ))}
              </select>
              <button type="submit" className="btn btn-primary w-100 mt-2">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddReviewPopup;
