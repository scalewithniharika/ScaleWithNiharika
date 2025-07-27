import 'bootstrap/dist/css/bootstrap.min.css';
import myPic from '../assets/Portfolio_Img.jpg';
import { Container, Col, Button, Row } from 'react-bootstrap';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section pb-5">
      <Container fluid className="px-5 px-md-5">
        <Row className="align-items-center">
          {/* Hero Text */}
          <Col md={7} className="order-2 order-md-1">
            <h1 className="hero-heading fw-bold">
              Hi, I'm <span className="highlight">Niharika</span></h1>
             <h2> 
              Your Growth-Obsessed Performance Marketer
            </h2>
            <p className="hero-subtext mt-4 mb-5">
              With 6+ years of experience, I’ve helped businesses grow by building ad strategies that drive real results. From telecom and D2C to health, fashion, travel, and fintech, I’ve scaled brands profitably—by turning every marketing spend into measurable growth.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-5">
              <Button className="btn-purple btn-xxl" onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}>🚀 Start Your Project</Button>
              <Button className="btn-outline-purple btn-xxl" onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}> 💼  Checkout Services</Button>
            </div>
            <Row className="text metrics">
              <Col><h2>1200+</h2><small>Campaigns Executed</small></Col>
              <Col><h2>15M+</h2><small>Ad Spend Strategically Managed</small></Col>
              <Col><h2>3.5x</h2><small>Average Return on Ad Spend</small></Col>
            </Row>
          </Col>

          {/* Hero Image */}
          <Col md={5} className="d-flex justify-content-center align-items-center mt-4 mt-md-0 order-1 order-md-2">
            <img
              src={myPic}
              alt="Niharika"
              className="rounded-circle img-fluid hero-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
