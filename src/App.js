import './App.css';
import Navbar from './components/NavBar.js';
import HeroSection from './components/HeroSection.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Portfolio from './components/Portfolio.js';
import ClientReview from './components/ClientReviews.js';
import ContactForm from './components/ContactForm.js';
import Footer from './components/Footer.js';
import AddReviewPopup from './components/ReviewPopup.js';
import ReviewSection from './components/ReviewSection.js';


function App() {
  return (
    <>
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Services/>
      <ReviewSection/>
      <ContactForm/>
      <Footer/>
    </div>

      

    </>
  );
}

export default App;
