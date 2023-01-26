import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css'


const Modal = ({ onClose, children }) => {
  const modalRoot = document.getElementById('modal-root');
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className={s.backdropDiv} onClick={handleBackdropClick}>
      <div className={s.contentDiv}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;