import React from 'react';
import './SuccessModal.css';

const SuccessModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>Email Sent Successfully!</h4>
        <p>Thank you for reaching out. We’ll get back to you shortly.</p>
        <button className="btn btn-success mt-3" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
