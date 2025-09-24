import { useEffect, useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import "./Modale.css";


const ModalGithub = ({ show, handleClose }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (show) { // on ne fetch que quand le modal est ouvert
      setLoading(true)
      fetch("https://api.github.com/users/github-john-doe") // 👈 remplace par ton user
        .then(res => res.json())
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
      <Modal.Header closeButton className="modal-body-custom">
        <Modal.Title className="modal-body-custom">Mon profil GitHub</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex modal-body-custom">
        {loading ? (
          <div className="w-100 text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <>
            <img
              src={data.avatar_url}
              alt="Avatar"
              style={{ width: '200px', height: 'auto', marginRight: '20px' }}
            />
            <div>
              
              <p className="custom-separator"><strong><a href={data.html_url} target="_blank" rel="noreferrer">
                <i className="bi bi-person me-2"></i>
                {data.name ||data.login}</a></strong></p>
              <p className="custom-separator">📍 {data.location }</p>
              <p className="custom-separator">{data.bio || "Pas de bio disponible."}</p>
              <p className="custom-separator">📁 Repositories : {data.public_repos}</p>
              <p className="custom-separator">👥 Followers : {data.followers}</p>
              <p className="custom-separator">➕ Following : {data.following}</p>
              
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer className="modal-body-custom">
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalGithub;
