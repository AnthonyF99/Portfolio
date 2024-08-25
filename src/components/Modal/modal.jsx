import { useState } from 'react';

export default function Modal({ onClose, children, title }) {
  // Fonction pour gérer le clic sur le bouton de fermeture
  const handleCloseClick = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    onClose(); // Appelle la fonction onClose passée en prop
  };

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </div>
          {title && <h1>{title}</h1>}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
