import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css';

function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kl1554r',      // Your actual Service ID
        'template_2eurgjj',     // Your actual Template ID
        formRef.current,
        'bURsgdMWaDbb21ocM'     // Your actual Public Key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send. Please try again.');
        }
      );
  };

  return (
    <section className="container my-5 py-5" id="contact">
      <h2 className="text-center fw-bold mb-3 contact-heading">Ready to Grow Your Business?</h2>
      <p className="text-center text-secondary mb-5 contact-subtext">
        Let's discuss your advertising goals and create a winning strategy
      </p>

      <div className="row justify-content-center">
        {/* Left Contact Info */}
<div className="col-md-5 mb-4">
  <h5 className="fw-bold contactCard-heading">Get In Touch</h5>

<p className="mb-2 contactCard-text"
  onClick={() => {
    navigator.clipboard.writeText("scalewithniharika@gmail.com");
    alert("Email copied to clipboard!");
  }}
  style={{ cursor: "pointer" }}
>
  <i className="bi bi-envelope-fill text-primary me-2 contactIcon-style"></i>
  scalewithniharika@gmail.com
</p>



  <p className="mb-2 contactCard-text">
    <a
      href="tel:+919877778074"
      className="text-decoration-none text-dark"
    >
      <i className="bi bi-telephone-fill text-primary me-2 contactIcon-style"></i>
      +91-9877778074
    </a>
  </p>

  <p className="mb-2 contactCard-text">
    <a
      href="https://www.linkedin.com/in/jainniharika/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none text-dark"
    >
      <i className="bi bi-linkedin text-primary me-2 contactIcon-style"></i>
      https://www.linkedin.com/in/jainniharika/
    </a>
  </p>

  <h6 className="mt-4 fw-bold contactCard-heading">Quick Response Time</h6>
  <p className="text-secondary contactCard-text">
    I typically respond within 2–4 hours during business days.
  </p>
</div>


        {/* Right Form */}
        <div className="col-md-6">
          <div
            className="p-4 rounded-4"
            style={{ background: 'linear-gradient(135deg, #f3e8ff, #fcd9f9)' }}
          >
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="mb-3">
                <input
                  type="text"
                  name="from_name"
                  className="form-control form-input"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="from_email"
                  className="form-control form-input"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  name="contact_number"
                  className="form-control form-input"
                  placeholder="Your Contact Number"
                  required
                />
              </div>
              <div className="mb-3">
                <select name="service" className="form-select form-input" required>
                  <option value="">Select Service</option>
                  <option value="Marketing">Marketing</option>
                  <option value="SEO">SEO</option>
                  <option value="Social Media">Social Media</option>
                </select>
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control form-input"
                  rows="4"
                  placeholder="Tell me about your project"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 form-input"
                style={{ background: '#a855f7', border: 'none' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
