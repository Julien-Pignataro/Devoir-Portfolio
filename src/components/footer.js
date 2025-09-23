import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import "./footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5 text-center">
      <Container>
        <Row>
          <Col md={4}>
            <h5>John Doe</h5>
            <p>40 rue Laure Diebold<br/>69009 Lyon, France<br/> 10 20 30 40 50<br/>john.doe@gmail.com</p>
            <div>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <BsLinkedin size={24} className="text-primary" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <BsTwitter size={24} className="text-info" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <BsGithub size={24} className="text-primary" />
              </a>
          </div>
          </Col>
          <Col md={4}>
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/fresh food">Fresh Food</Link></li>
              <li><Link to="/restaurant akira">Restaurant Akira</Link></li>
              <li><Link to="/espace bien être">Espace bien être</Link></li>
              <li><Link to="/seo">SEO</Link></li>
              <li><Link to="/creation d'une api">Création d’une API</Link></li>
              <li><Link to="/maquette d'un site">Maquette d’un site</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
          
