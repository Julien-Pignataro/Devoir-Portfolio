import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsBrush, BsCodeSlash, BsSearch } from "react-icons/bs"; // icônes bootstrap

import "./Section.css"; // pour le trait bleu
import "./Services.css"; // pour les ombrages au survol
import bannerImg from '../images/banner.jpg'

function Services() {
  return (
    <>
      <header  style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '30vh',
        }}></header>
      {/* Main */}
      <main className="my-5">
        <Container>
          <h1 className="text-center mb-4">Mon offre de services</h1>
          <p className="text-center">Voici les prestations sur lesquelles je peux intervenir</p>
         <div className="barre-bleue mx-auto"
             style={{
                height: '4px',
                width: '40%',
                backgroundColor: '#007bff', // bleu bootstrap
                marginBottom: '1rem',
              }}></div>
          
          <Row className="mt-5">
            {/* UX Design */}
            <Col md={4} className="mb-4">
              <Card className="text-center shadow-sm h-100 p-4">
                <div className="text-center">
                <BsBrush size={30} className="text-primary mb-5" />
                </div>
                <h5 className="fw-bold">UX Design</h5>
                <p>
                L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'obiectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                </p>
              </Card>
            </Col>

            {/* Développement Web */}
            <Col md={4} className="mb-4">
              <Card className="text-center shadow-sm h-100 p-4">
                <div className="text-center">
                <BsCodeSlash size={30} className="text-primary mb-5" />
                </div>
                <h5 className="fw-bold">Développement Web</h5>
                <p>
                  Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                </p>
              </Card>
            </Col>

            {/* Référencement */}
            <Col md={4} className="mb-4">
              <Card className="text-center shadow-sm h-100 p-4">
                <div className="text-center">
                <BsSearch size={30} className="text-primary mb-5" />
                </div>
                <h5 className="fw-bold">Référencement</h5>
                <p>
                  Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>

    </>
  );
}

export default Services;