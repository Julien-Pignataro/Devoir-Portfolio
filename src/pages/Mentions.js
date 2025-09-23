import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mentions.css"

function Mentions() {
  return (

    <>
    <main className="container my-5">
      {/* Titre principal */}
      <div className="text-center mb-5">
        <h2>Mentions légales</h2>
        <div className="title-underline"></div>
      </div>

      {/* Liste déroulante Bootstrap */}
      <div className="accordion mx-auto" id="mentionsAccordion" style={{ maxWidth: "800px" }}>
        {/* Éditeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <p><strong>John Doe</strong></p>
              <p>
                <i className="bi bi-map me-2"></i>
                40 rue Laure Diebold 
              </p>
              <p>
                <i className="bi bi-geo-alt me-2"></i>
                69009 Lyon, France
              </p>
              <p>
                <i className="bi bi-telephone me-2"></i>
                10 20 30 40 50
              </p>
              <p>
                <i className="bi bi-envelope-at me-2"></i>
                john.doe@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Hébergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <strong><p>alwaysdata</p></strong>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <i className="bi bi-globe"></i> <a href="https://www.alwaysdata.com/fr/" class="text-primary text-decoration-underline">www.alwaysdata.com</a>
            </div>
          </div>
        </div>

        {/* Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <strong><p>Crédits</p></strong>
              <p>Ce site a été réalisé par Jhon Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/landing/multi-marque/?code=1464&tm_source=google&utm_medium=cpc&utm_campaign=TOTAL-REF_PAYANT-Marque_CEF&gad_source=1&gad_campaignid=59552660&gbraid=0AAAAAD-SFiwptBgNaRARIy6wouYJQNkpC&gclid=EAIaIQobChMIy9rK16fvjwMVwYl8Bh1b_iSqEAAYASAAEgIcF_D_BwE" class="text-primary text-decoration-underline" target="_blank" rel="nooper noreferrer">Centre Européen de formation</a></p>
              <p><i>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site</i> <a href="https://pixabay.com/fr/" class="text-primary text-decoration-underline" target="_blank" rel="nooper noreferrer">Pixabay</a></p>
              <p><i>La favicon de ce site a été fournie par</i> <a href="https://www.flaticon.com/de/kostenlose-" class="text-primary text-decoration-underline" target="_blank" rel="nooper noreferrer">John doe Icons erstellt von Freepik - Flaticon</a></p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default Mentions;