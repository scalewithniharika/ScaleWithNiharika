import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import Logo from '../assets/logo1.png';
function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container className="text-center">
        {/* Logo and Brand Name */}
        <Row className="mb-2">
          <Col>
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
              <span className="footer-icon"> <img
                        src={Logo}
                        alt="Niharika Logo"
                        height="30"
                        className="d-inline-block align-top"/></span>
              <span className="footer-heading">ScaleWithNiharika</span>
            </div>
          </Col>
        </Row>

        {/* Slogan */}
        <Row className="mb-4">
          <Col>
            <p className="footer-subtext">
              Turning ad spend into profitable growth since 2019
            </p>
          </Col>
        </Row>

        {/* Social Icons */}
        <Row className="mb-4">
          <Col className="d-flex justify-content-center gap-3">
            <a href="https://www.linkedin.com/in/jainniharika/" className="footer-icon text-white">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/16g8F8a86g/" className="footer-icon text-white">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/niharika.jain?igsh=MWtrNm5oOXFuMjlhcg==" className="footer-icon text-white">
              <FaInstagram />
            </a>
          </Col>
        </Row>

        {/* Divider */}
        <hr className="text-secondary" />

        {/* Copyright */}
        <Row className="mb-3">
          <Col>
            <p className="footer-copy mb-0">
              © 2025 ScaleWithNiharika. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
