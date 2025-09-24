import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImg from '../images/banner.jpg';
import freshImg from "../images/portfolio/fresh-food.jpg";
import restaurantImg from "../images/portfolio/restaurant-japonais.jpg";
import espaceImg from "../images/portfolio/espace-bien-etre.jpg";
import seoImg from "../images/portfolio/seo.jpg";
import coderImg from "../images/portfolio/coder.jpg";
import screensImg from "../images/portfolio/screens.jpg";

function Portfolio() {
  return (
    
    <>
      <header  style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '30vh',
        }}></header>

    <main className="container my-5">
      {/* Titre */}
      <div className="text-center mb-5">
        <h2>Portfolio</h2>
        <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
         <div className="barre-bleue mx-auto"
             style={{
                height: '4px',
                width: '40%',
                backgroundColor: '#007bff', // bleu bootstrap
                marginBottom: '1rem',
              }}></div>
      </div>

      {/* Grid de projets */}
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src={freshImg} className="card-img-top" alt="Fresh Food" />
            <div className="card-body text-center">
              <h5 className="card-title">Fresh Food</h5>
              <p className="card-text">Site de vente de produits frais en ligne</p>
              <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-center text-muted small">
              Site réalisé avec PHP et MySQL
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src={restaurantImg} className="card-img-top" alt="Restaurant Akira" />
            <div className="card-body text-center">
              <h5 className="card-title">Restaurant Akira</h5>
              <p className="card-text">Site de vente de produits frais en ligne</p>
              <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-center text-muted small">
              Site réalisé avec WordPress
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src={espaceImg} className="card-img-top" alt="Espace bien-être" />
            <div className="card-body text-center">
              <h5 className="card-title">Espace bien-être</h5>
              <p className="card-text">Site de vente de produits frais en ligne</p>
              <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-center text-muted small">
              Site réalisé avec LARAVEL
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src={seoImg} className="card-img-top" alt="SEO" />
            <div className="card-body text-center">
              <h5 className="card-title">SEO</h5>
              <p className="card-text">Amélioration du référencement d’un site e-commerce</p>
              <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-center text-muted small">
              Utilisation des outils SEO
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src={coderImg} className="card-img-top" alt="API" />
            <div className="card-body text-center">
              <h5 className="card-title">Création d'une API</h5>
              <p className="card-text">Création d’une API RESTFUL publique</p>
              <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-center text-muted small">
              PHP - SYMFONY
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4">
          <div className="card h-100">
            <img src={screensImg} className="card-img-top" alt="Maquette site web" />
            <div className="card-body text-center">
              <h5 className="card-title">Maquette d’un site web</h5>
              <p className="card-text">Création du prototype d’un site</p>
              <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer text-center text-muted small">
              Réalisé avec FIGMA
            </div>
          </div>
        </div>
      </div>
    </main>
     </>
  );
}

export default Portfolio;