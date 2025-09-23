// src/pages/Home.js
import React from 'react';
import heroImg from '../images/hero-bg.jpg';
import aboutImg from '../images/john-doe-about.jpg'; // <-- ton image pour la section "À propos"


function Home() {
  return (
    <>
      {/* Section Hero */}
      <header className="hero d-flex align-items-center justify-content-center text-center text-white" 
      style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}>
        <div>
          <h1>Bonjour, je suis John Doe</h1>
          <h3>Développeur web full stack</h3>
          <button className="btn btn-danger mt-3">En savoir plus</button>
        </div>
      </header>

      {/* Section À propos + Compétences */}
      <section className="container my-5">
        <div className="row bg-white p-4 shadow-sm">
          <div className="col-md-6">
            <h4>A propos</h4>
            <div className="barre-bleue mb-4"
             style={{
                height: '4px',
                width: '100%',
                backgroundColor: '#007bff', // bleu bootstrap
                marginBottom: '1rem',
              }}></div>
            <img src={aboutImg} alt="À propos" className="img-fluid mb-3" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
          </div>
          <div className="col-md-6">
            <h4>Mes compétences</h4>
            <div className="barre-bleue mb-4"
             style={{
                height: '4px',
                width: '100%',
                backgroundColor: '#007bff', // bleu bootstrap
                marginBottom: '1rem',
              }}></div>
            <Skill name="HTML5" value={90} color="danger" />
            <Skill name="CSS3" value={80} color="info" />
            <Skill name="JAVASCRIPT" value={70} color="warning" />
            <Skill name="PHP" value={60} color="success" />
            <Skill name="REACT" value={50} color="primary" />
          </div>
        </div>
      </section>
    </>
  );
}

function Skill({ name, value, color }) {
  return (
    <div className="mb-3">
      <strong>{name} {value}%</strong>
      <div className="progress">
        <div className={`progress-bar bg-${color}`} role="progressbar" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

export default Home;
