import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImg from '../images/banner.jpg';
import "./contact.css";

function Contact() {
  return (
    <>
    <header  style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '30vh',
        }}></header>

    <main className="container my-5">
      {/* Titre principal */}
      <div className="text-center mb-5">
        <h2>Contact</h2>
        <p className="text-muted">
          Pour me contacter en vue d’un entretien ou d’une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
      </div>
       <div className="barre-bleue mx-auto"
             style={{
                height: '4px',
                width: '40%',
                backgroundColor: '#007bff', // bleu bootstrap
                marginBottom: '3rem',
              }}></div>
    

      {/* Un seul cadre pour formulaire + coordonnées */}
      <div className="custom-card contact-wrapper mx-auto ">
        <div className="card-body">
          <div className="row">
            {/* Formulaire */}
            <div className="col-md-6 mb-4">
              <h5 className="section-title">
                Formulaire de contact
              </h5>
              <form>
                <div className="mb-3 custom-card">
                  <input type="text" className="form-control" placeholder="Votre nom" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Votre adresse email" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" placeholder="Votre numéro de téléphone" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Sujet" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Votre message"></textarea>
                </div>
                <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Envoyer</button>
                </div>
              </form>
            </div>

            {/* Coordonnées */}
            <div className="col-md-6 mb-4">
              <h5 className="section-title">
                Mes coordonnées
              </h5>
              <p><strong>John Doe</strong></p>
              <p>
                <i className="bi bi-geo-alt-fill me-2"></i>
                40 rue Laure Diebold<br />
                69009 Lyon, France
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                10 20 30 40 50
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                john.doe@gmail.com
              </p>

              {/* Carte Google Maps */}
              <div className="mt-3">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.904398458777!2d4.79805731559697!3d45.77967557910626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebb1a29f9c07%3A0x4093cafcbe67140!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1694012345678!5m2!1sfr!2sfr"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default Contact;