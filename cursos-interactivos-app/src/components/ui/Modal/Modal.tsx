import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, imageSrc }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar modal">×</button>
        <div className={styles.content}>
          <div className={styles.texto}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={styles.imagen}>
            <img src={imageSrc} alt="Descripción visual" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
